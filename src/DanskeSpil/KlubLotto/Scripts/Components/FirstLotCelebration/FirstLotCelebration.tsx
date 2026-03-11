import { useEffect } from 'react';
import useDailyLotData from '../../Hooks/useDailyLotData';
import { output } from '../../Utils/output';
import { openPopupFirstLot } from '../../Utils/openPopup';
import { FirstLotCelebrationDataSettings } from '../../Types/DataSettings/firstLotCelebration';

export const FirstLotCelebration = ({ title, text, image, image2X }: FirstLotCelebrationDataSettings) => {
  const { data, isLoading, isError, refetch } = useDailyLotData();

  useEffect(() => {
    if (isError) {
      output('Error in first lot celebration');
    }

    if (data && data.status === 'LotGranted') {
      const event = new CustomEvent('klublotto:firstLot:achieved');
      document.dispatchEvent(event);

      openPopupFirstLot({
        title,
        text,
        image: image?.src || '',
        image2X: image2X?.src || '',
      });
    } else if (data && data.status !== 'LotGranted') {
      const timeout = setTimeout(() => {
        refetch();
        output('First lot not granted yet, refetching...');
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, isError, data, title, text, refetch]);

  return null;
};
