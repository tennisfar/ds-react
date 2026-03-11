import React, { useEffect } from 'react';
import { SubscriberDataSettings } from '../../Types/DataSettings/subscriber';

export const RedirectOnLogout = ({ salesPageLink }: SubscriberDataSettings) => {
  useEffect(() => {
    window.DSAPI?.ready(function () {
      window.DSAPI.Account.subscribeUserLoggedOut({
        callback: function () {
          window.location.href = salesPageLink;
        },
      });
    });
  }, []);
  return <></>; // This is a placeholder to avoid rendering issues
};
