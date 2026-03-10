import { createFileRoute } from '@tanstack/react-router'
import { FreePrizeClaimReceipt } from '../../Components/FreePrizeClaimReceipt/FreePrizeClaimReceipt.tsx';
import { WalletListAwardClaimType } from '../../Types/ApiResponse/accounts.ts';

export const Route = createFileRoute('/klublotto/FreePrizeClaimReceipt')({
  component: RouteComponent,
})

function RouteComponent() {
  const dataComponents = [
    {
      "type": "1_LOTTO_LIGHTNING" as WalletListAwardClaimType,
      "title": "Din indløsning er gennemført",
      "text": "Du er med i tr&aelig;kningen om {poolsize} mio. kr. og i Million&aelig;rchancen, hvor vi hver uge tr&aelig;kker lod blandt alle r&aelig;kker om 2 x 1 mio. kr.",
      "disclaimer": "Spillet udbydes af Danske Lotteri Spil A/S. <a rel=\"noopener noreferrer\" href=\"https://danskespil.dk/regler--a--vilkaar/regler/spilleregler_dlo#lotto\" target=\"_blank\">Se vilk&aring;r</a>",
      "id": "044b20ff-ef2e-4aea-a184-3607cfa2fe87",
      "templateName": "FreePrizeClaimReceiptData"
    },
    {
      "type": "1_VIKING_LIGHTNING" as WalletListAwardClaimType,
      "title": "Din indløsning er gennemført",
      "text": "Du er med i tr&aelig;kningen om {poolsize} mio. kr. og i Million&aelig;rchancen, hvor vi hver uge tr&aelig;kker lod blandt alle r&aelig;kker om 2 x 1 mio. kr.",
      "disclaimer": "Spillet udbydes af Danske Lotteri Spil A/S. <a rel=\"noopener noreferrer\" href=\"https://danskespil.dk/regler--a--vilkaar/regler/spilleregler_dlo#vikinglotto\" target=\"_blank\">Se vilk&aring;r</a>",
      "id": "044b20ff-ef2e-4aea-a184-3607cfa2fe87",
      "templateName": "FreePrizeClaimReceiptData"
    },
    {
      "type": "1_EUROJACKPOT_LIGHTNING" as WalletListAwardClaimType,
      "title": "Din indløsning er gennemført",
      "text": "Du er med i tr&aelig;kningen om {poolsize} mio. kr. og i Million&aelig;rchancen, hvor vi hver uge tr&aelig;kker lod blandt alle r&aelig;kker om 2 x 1 mio. kr.",
      "disclaimer": "Spillet udbydes af Danske Lotteri Spil A/S. <a rel=\"noopener noreferrer\" href=\"https://danskespil.dk/regler--a--vilkaar/regler/spilleregler_dlo#eurojackpot\" target=\"_blank\">Se vilk&aring;r</a>",
      "id": "044b20ff-ef2e-4aea-a184-3607cfa2fe87",
      "templateName": "FreePrizeClaimReceiptData"
    }
  ]
  
  return (
    <>
      <FreePrizeClaimReceipt dataComponents={dataComponents}/>
    </>
  )
}
