// @ts-nocheck
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { FreePrizeClaim } from '../../DanskeSpil/KlubLotto/Scripts/Components/FreePrizeClaim/FreePrizeClaim';
import { PageHeader } from '../../DanskeSpil/KlubLotto/Views/PageHeader';
import { WalletListAwardClaimType } from '../../DanskeSpil/KlubLotto/Scripts/Types/ApiResponse/accounts';
import { SitecoreGenericLink } from '../../DanskeSpil/KlubLotto/Scripts/Types/sitecore';

export const Route = createFileRoute('/klublotto/FreePrizeClaim')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => ({
    id: search.id as number | undefined,
  }),
});

function RouteComponent() {
  const { id } = Route.useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate({
        to: '/klublotto/FreePrizeClaim',
        search: { id: 1234 },
        replace: true,
      });
    }
  }, [id, navigate]);

  // Don't render anything until `id` is present in the URL
  if (!id) {
    return null;
  }

  const dataComponents = [
    {
      type: '1_LOTTO_LIGHTNING' as WalletListAwardClaimType,
      claimTitle: 'string',
      claimText: 'string',
      claimDisclaimer: 'string',
      claimCtaLabel: 'string',
      expiredTitle: 'string',
      redeemedTitle: 'string',
    },
  ];

  const receiptLink = {
    anchor: 'string',
    class: 'string',
    query: 'string',
    style: 'string',
    target: '_blank',
    targetId: 'string',
    text: 'string',
    title: '',
    type: 0,
    url: './klublotto/FreePrizeClaimReceipt',
  } as SitecoreGenericLink;

  return (
    <>
      <PageHeader>Dine præmier</PageHeader>

      <FreePrizeClaim dataComponents={dataComponents} receiptLink={receiptLink} />
    </>
  );
}
