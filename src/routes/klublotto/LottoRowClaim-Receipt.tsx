import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { Receipt } from '@KlubLotto/Scripts/Components/LottoRowClaim/_Receipt.tsx';
export const Route = createFileRoute('/klublotto/LottoRowClaim-Receipt')({
  component: RouteComponent,
});

function RouteComponent() {
  const lottoCouponData = {
    couponId: '1234567890',
    transactionDate: new Date().toISOString(),
    primaryGame: {
      gameType: 'Lotto',
      drawInfo: [
        {
          drawDate: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
        },
      ],
      rows: [{ numbers: [1, 2, 3, 4, 5, 6] }, { numbers: [7, 8, 9, 10, 11, 12] }],
    },
  };

  const lottoReceiptProps = {
    title: 'Tillykke! Du har vundet en præmie i Klub Lotto',
    text: 'Du har nu chancen for at vinde {lottoPoolSize} millioner kroner i næste uges Lotto trækning!',
    disclaimer: 'Husk at tjekke dine numre og deltag i næste uges trækning.',
    brand: 'lotto',
  };

  return (
    <div>
      <Receipt couponData={lottoCouponData} receiptProps={lottoReceiptProps} />
    </div>
  );
}
