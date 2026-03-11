import React, { useEffect, useState } from 'react';
import useWalletData from '../../Hooks/useWalletData';
import { ErrorDefaultOutput } from '../ErrorDefaultOutput/ErrorDefaultOutput';
import { Spinner } from '../Spinner/Spinner';
import { trackEvent } from '../../Utils/tracking';

export const YourRewards = () => {
  const { data, isLoading, isError } = useWalletData();
  const [iframeUrl, setIframeUrl] = useState<string | undefined>();

  useEffect(() => {
    if (data) {
      setIframeUrl(data.url);
    }
  }, [data]);

  // Listen for postMessage events from the iframe
  useEffect(() => {
    if (!iframeUrl) return;

    const handleMessage = (event: MessageEvent) => {
      const eventOrigin = event.origin;
      const iframeOrigin = new URL(iframeUrl as string).origin;

      if (eventOrigin === iframeOrigin) {
        let data = event.data;

        if (typeof data !== 'object') {
          try {
            data = JSON.parse(data);
          } catch {
            // Something is wrong with the data format
            console.error('Received invalid data format from iframe post message');
            return;
          }
        }

        if (!(typeof data === 'object' && data !== null)) {
          // Something is wrong with the data format
          console.error('Received invalid data format from iframe post message');
          return;
        }

        const messageState = data?.event as 'navigate' | 'cta';

        if (messageState === 'navigate') {
          trackEvent({
            action: 'navigate',
            label: data.metadata?.from || 'unknown',
            value: data.metadata?.to || 'unknown'
          });
        }

        if (messageState === 'cta') {
          trackEvent({
            action: 'prize_redemption',
            label: data.metadata?.text || 'unknown',
            value: data.metadata?.value || 'unknown'
          });
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [iframeUrl]);

  if (isLoading) {
    return (
      <div className={'kl-your-rewards'}>
        <Spinner className={'kl-your-rewards__spinner'}/>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={'kl-your-rewards'}>
        <ErrorDefaultOutput className={'kl-your-rewards__error'} variant={'dark'}/>
      </div>
    );
  }

  return (
    <div className={'kl-your-rewards'}>
      {iframeUrl && <iframe src={iframeUrl} className={'kl-your-rewards__iframe'} allow={'geolocation'}></iframe>}
    </div>
  );
};