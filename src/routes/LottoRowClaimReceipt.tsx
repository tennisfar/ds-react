import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { Receipt } from '@KlubLotto/Scripts/Components/LottoRowClaim/_Receipt.tsx';
export const Route = createFileRoute('/LottoRowClaimReceipt')({
  component: RouteComponent,
});

function RouteComponent() {
  const couponData = {
    couponId: '1234567890',
    transactionDate: new Date().toISOString(),
    primaryGame: {
      drawInfo: [
        {
          drawDate: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
        },
      ],
      rows: [{ numbers: [1, 2, 3, 4, 5, 6] }, { numbers: [7, 8, 9, 10, 11, 12] }],
    },
  };

  const receiptProps = {
    title: 'Tillykke! Du har vundet en præmie i Klub Lotto',
    text: 'Du har nu chancen for at vinde {lottoPoolSize} millioner kroner i næste uges Lotto trækning!',
    disclaimer: 'Husk at tjekke dine numre og deltag i næste uges trækning.',
  };

  return (
    <div>
      <Receipt couponData={couponData} receiptProps={receiptProps} />
    </div>
  );
}
