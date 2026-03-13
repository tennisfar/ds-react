import React, { useEffect, useState } from 'react';
import useWalletListData from '../../Hooks/useWalletListData';
import { openPopupNewPrize, openPopupPrizeExpires } from '../../Utils/openPopup';
import { getCookie, setCookie } from '../../Utils/cookies';
import { NewPrizeNotificationDataSettings } from '../../Types/DataSettings/newPrizeNotification';
import { WalletListAwardApiResponse } from '../../Types/ApiResponse/accounts';

const LOCAL_STORAGE_SEEN_IDS = 'KlubLottoAlreadySeenPrizeReferences';
const LOCAL_STORAGE_SOON_LAST_DISMISSED = 'KlubLottoExpiresSoonLastDismissedDay';
const EXPIRES_SOON_DAYS = 3;

// --- Helpers ---
// Safely read seen IDs once
function getSeenTicketIds(): string[] {
  try {
    const stored = getCookie(LOCAL_STORAGE_SEEN_IDS);
    const parsed = stored ? JSON.parse(decodeURIComponent(stored)) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

// Parse ignore list
function parseReferencesToIgnore(refs: string): string[] {
  return refs
    .split(',')
    .map((ref) => ref.trim())
    .filter((ref) => ref.length > 0);
}

// Check if a ticket is expiring within EXPIRES_SOON_DAYS
function isExpiringSoon(expires: string): boolean {
  const expiresDate = new Date(expires);
  const now = new Date();
  const diffMs = expiresDate.getTime() - now.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays < EXPIRES_SOON_DAYS;
}

// Local-day key (YYYY-MM-DD) to gate 'expires soon' once per day
function todayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export const NewPrizeNotification = (
  {
    titleNewPrize,
    titlePrizeExpires,
    image,
    linkToRedeemPage,
    referencesToIgnore
  }: NewPrizeNotificationDataSettings) => {
  const { data: tickets } = useWalletListData();

  // Derived state used for rendering (avoid reading `tickets` directly in render)
  const [ignoreRefs, setIgnoreRefs] = useState<string[]>([]);
  const [seenIds, setSeenIds] = useState<string[]>(() => getSeenTicketIds());
  const [validTickets, setValidTickets] = useState<WalletListAwardApiResponse[]>([]);
  const [expireDate, setExpireDate] = useState<string | null>(null);

  // Flags
  const [shouldShowNotification, setShouldShowNotification] = useState<boolean>(false);
  const [shouldShowExpiresSoon, setShouldShowExpiresSoon] = useState<boolean>(false);

  // Daily gating for 'expires soon' (persisted)
  const [lastSoonDismissedDay, setLastSoonDismissedDay] = useState<string | null>(() => getCookie(LOCAL_STORAGE_SOON_LAST_DISMISSED));

  // Update ignore list when prop changes
  useEffect(() => {
    setIgnoreRefs(parseReferencesToIgnore(referencesToIgnore));
  }, [referencesToIgnore]);

  // Main effect: compute valid tickets and flags (only place we touch `tickets`)
  useEffect(() => {
    // Clear when API hasn't provided tickets yet
    if (!Array.isArray(tickets) || tickets.length === 0) {
      setValidTickets([]);
      setShouldShowNotification(false);
      setShouldShowExpiresSoon(false);
      return;
    }

    // 1) Valid = not redeemed and not ignored
    const valid = tickets.filter((t) => t.claimStatus === 'NotRedeemed' && !ignoreRefs.includes(t.reference));

    // 2) Unseen = valid but not in seenIds
    const unseen = valid.filter((t) => !seenIds.includes(t.id));

    // 3) Flags
    const showNew = unseen.length > 0;

    // 'Expires soon' shows only once per local day and only if there are no unseen tickets.
    const hasSoon = valid.some((t) => isExpiringSoon(t.expires));
    const showSoon = !showNew && hasSoon && lastSoonDismissedDay !== todayKey();

    if (hasSoon) {
      // Find the soonest expiry date among valid unseen tickets
      const soonest = unseen.length > 0
        ? unseen.map((t) => new Date(t.expires)).reduce((earliest, current) => (current < earliest ? current : earliest))
        : new Date(valid[0].expires);
      setExpireDate(soonest.toISOString());
    } else {
      setExpireDate(null);
    }

    setValidTickets(valid);
    setShouldShowNotification(showNew);
    setShouldShowExpiresSoon(showSoon);
  }, [tickets, ignoreRefs, seenIds, lastSoonDismissedDay]);


  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (shouldShowNotification) {
      timeoutId = setTimeout(() => {
        openPopupNewPrize({
          title: titleNewPrize,
          image: image?.src || '',
          buttons: [
            {
              variant: 'secondary',
              ctaLabel: linkToRedeemPage?.text || 'Se præmie',
              inverted: false,
              cb: () => {
                setNewPrizeCookies();
                redirectToRedeemPage();
              },
            }
          ],
          onOverlayClicked: setNewPrizeCookies,
        });
      }, 500);
    } else if (shouldShowExpiresSoon) {
      timeoutId = setTimeout(() => {
        openPopupPrizeExpires({
          title: titlePrizeExpires,
          expireDate,
          image: image?.src || '',
          buttons: [
            {
              variant: 'secondary',
              ctaLabel: linkToRedeemPage?.text || 'Se præmie',
              inverted: false,
              cb: () => {
                setExpiresSoonCookies();
                redirectToRedeemPage();
              },
            }
          ],
          onOverlayClicked: setExpiresSoonCookies,
        });
      }, 500);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [shouldShowNotification, shouldShowExpiresSoon, expireDate]);

  const redirectToRedeemPage = () => {
    window.location.href = linkToRedeemPage?.url || '/klublotto/dine-praemier';
  };

  const setNewPrizeCookies = () => {
    // Mark all current valid tickets as seen (persist)
    const ids = validTickets.map((t) => t.id);
    setSeenIds(ids);
    setCookie(LOCAL_STORAGE_SEEN_IDS, JSON.stringify(ids));

    // Also dismiss 'expires soon' for today to avoid it popping up right after
    const today = todayKey();
    setLastSoonDismissedDay(today);
    setCookie(LOCAL_STORAGE_SOON_LAST_DISMISSED, today);

    setShouldShowNotification(false);
    setShouldShowExpiresSoon(false);
  };

  const setExpiresSoonCookies = () => {
    // Dismiss 'expires soon' for today only (no IDs persisted)
    const today = todayKey();
    setLastSoonDismissedDay(today);
    setCookie(LOCAL_STORAGE_SOON_LAST_DISMISSED, today);

    setShouldShowNotification(false);
    setShouldShowExpiresSoon(false);
  };

  // Render nothing when nothing to show
  if (!shouldShowNotification && !shouldShowExpiresSoon) return null;

  return <></>; // This is a placeholder to avoid rendering issues
};
