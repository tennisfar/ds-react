import React from 'react';
import { JackpotGame, ReceiptProps } from '../../Types/lottoRowClaim';
import { LottoCountdown } from '../LottoCountdown/LottoCountdown';

export const Receipt = ({ couponData, receiptProps }: ReceiptProps) => {
  const updatedReceiptProps = { ...receiptProps };
  const { couponId, primaryGame, transactionDate } = couponData;
  const { drawInfo, rows } = primaryGame;
  const drawDate = drawInfo[0]?.drawDate || '';
  const couponBackgroundUrl = `url(${'/dlo/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/LottoRowClaim/coupon-background.svg'})`;
  const lottoLogoUrl = '/dlo/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/LottoRowClaim/lotto-logo.svg';

  try {
    const jackpotInfo = document.querySelector('#jackpot-info');
    if (jackpotInfo?.innerHTML) {
      const domJson: JackpotGame[] = JSON.parse(jackpotInfo.innerHTML);
      const lottoPoolSize = domJson.find((game) => game.GameId === 'lotto')?.PoolSizeFormatted || '0';
      updatedReceiptProps.text = updatedReceiptProps.text.replace('{lottoPoolSize}', lottoPoolSize);
    }
  } catch (ignore) {
    // No bother, we replace the {lottoPoolSize} with a minimum lotto pool value later, in case the jackpot info is not available
  }

  // Fallback in case the jackpot info is not available
  updatedReceiptProps.text = updatedReceiptProps.text.replace('{lottoPoolSize}', 'min. 8');
  const { title, text, disclaimer } = updatedReceiptProps;

  return (
    <div className={'kl-lotto-row-claim'}>
      <img src={'/dlo/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/LottoRowClaim/lotto-ball.png'} alt='' className={'kl-lotto-row-claim__ball'}/>

      <LottoCountdown className={'kl-lotto-row-claim__lotto-countdown'} drawDate={drawDate}/>

      <div className={'kl-lotto-row-claim__title'} dangerouslySetInnerHTML={{ __html: title }}/>
      <div className={'kl-lotto-row-claim__text'} dangerouslySetInnerHTML={{ __html: text }}/>

      <div className={'kl-lotto-row-claim__receipt'}>
        <div className={'kl-lotto-row-claim__receipt-paper'}
          style={{ backgroundImage: couponBackgroundUrl }}>
          <img src={lottoLogoUrl} alt={''} className={'kl-lotto-row-claim__receipt-logo'}/>
          <div className={'kl-lotto-row-claim__receipt-date'}>
            {transactionDate
              ? new Date(transactionDate).toLocaleDateString('da-DK', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }) +
              ' kl.' +
              new Date(transactionDate).toLocaleTimeString('da-DK', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })
              : ''}
          </div>
          <div className={'kl-lotto-row-claim__receipt-coupon-id'}>Kupon: {couponId}</div>
          <div className={'kl-lotto-row-claim__receipt-rows'}>
            {rows.map((row, index) => {
              const rowNumbers = row.numbers || [];
              return (
                <div className={'kl-lotto-row-claim__receipt-row'} key={index}>
                  <div className={'kl-lotto-row-claim__receipt-row-prefix'}>{index + 1}.</div>
                  <div className={'kl-lotto-row-claim__receipt-row-numbers'}>
                    {rowNumbers.map((rowNumber) => (
                      <div key={rowNumber} className={'kl-lotto-row-claim__receipt-row-number'}>
                        {rowNumber}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={'kl-lotto-row-claim__total'}>
            <div className={'kl-lotto-row-claim__total-text'}>Samlet v&aelig;rdi</div>
            <div className={'kl-lotto-row-claim__total-price'}>0 kr.</div>
          </div>
          <div className={'kl-lotto-row-claim__disclaimer'} dangerouslySetInnerHTML={{ __html: disclaimer }}/>
        </div>
      </div>
    </div>
  );
};
