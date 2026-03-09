import { createFileRoute } from '@tanstack/react-router'
import { FreePrizeClaimReceipt } from '../../Components/FreePrizeClaimReceipt/FreePrizeClaimReceipt.tsx';
// @ts-ignore
// import { FreePrizeClaimReceipt } from '@KlubLotto/Scripts/Components/FreePrizeClaimReceipt/FreePrizeClaimReceipt.tsx';

export const Route = createFileRoute('/klublotto/FreePrizeClaimReceipt')({
  component: RouteComponent,
})

function RouteComponent() {
  const dataComponents = [
    {
      type: '1_LOTTO_LIGHTNING',
      title: 'LOTTO_LIGHTNING',
      text: 'Du har vundet en gratis LOTTO Lightning række. Spil den inden for 24 timer.',
      disclaimer: 'Tilbuddet gælder i 24 timer efter modtagelse. Tilbuddet kan ikke kombineres med andre tilbud. Tilbuddet kan ikke overdrages eller ombyttes til kontanter.'
    }
  ]
  
  return (
    <>
      <FreePrizeClaimReceipt dataComponents={dataComponents}  />
    </>
  )
}
