import { pushGaEvent, pushGaEventOnPageRedirect } from '@Ensighten/Ensighten';

type TrackEventProps = {
  action: string;
  label?: string;
  ctaLabel?: string;
  value?: string;
}

type EventDataProps = {
  action: string;
  label?: string;
  ctaLabel?: string;
  value?: string;
}

const getEventData = ({ action = '', label = '', ctaLabel = '', value = '' }: EventDataProps) => {
  if (!label && ctaLabel) {
    ctaLabel = 'cta_click: ' + ctaLabel;
  }

  return {
    category: 'klub_lotto',
    action,
    label: label || ctaLabel || '',
    value,
  };
};

export const trackEventOnRedirect = ({ action, label, ctaLabel }: TrackEventProps) => {
  const eventData = getEventData({ action, label, ctaLabel });
  pushGaEventOnPageRedirect(eventData);
};

export const trackEvent = ({ action, label, ctaLabel, value }: TrackEventProps) => {
  const eventData = getEventData({ action, label, ctaLabel, value });
  pushGaEvent(eventData);
};