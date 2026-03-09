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
      "type": "1_LOTTO_LIGHTNING",
      "title": "Din indløsning er gennemført",
      "text": "Du er med i tr&aelig;kningen om {poolsize} mio. kr. og i Million&aelig;rchancen, hvor vi hver uge tr&aelig;kker lod blandt alle r&aelig;kker om 2 x 1 mio. kr.",
      "disclaimer": "Spillet udbydes af Danske Lotteri Spil A/S. <a rel=\"noopener noreferrer\" href=\"https://danskespil.dk/regler--a--vilkaar/regler/spilleregler_dlo#lotto\" target=\"_blank\">Se vilk&aring;r</a>",
      "id": "044b20ff-ef2e-4aea-a184-3607cfa2fe87",
      "templateName": "FreePrizeClaimReceiptData"
    },
    {
      "type": "1_VIKING_LIGHTNING",
      "title": "Din indløsning er gennemført",
      "text": "Du er med i tr&aelig;kningen om {poolsize} mio. kr. og i Million&aelig;rchancen, hvor vi hver uge tr&aelig;kker lod blandt alle r&aelig;kker om 2 x 1 mio. kr.",
      "disclaimer": "Spillet udbydes af Danske Lotteri Spil A/S. <a rel=\"noopener noreferrer\" href=\"https://danskespil.dk/regler--a--vilkaar/regler/spilleregler_dlo#vikinglotto\" target=\"_blank\">Se vilk&aring;r</a>",
      "id": "044b20ff-ef2e-4aea-a184-3607cfa2fe87",
      "templateName": "FreePrizeClaimReceiptData"
    },
    {
      "type": "1_EUROJACKPOT_LIGHTNING",
      "title": "Din indløsning er gennemført",
      "text": "Du er med i tr&aelig;kningen om {poolsize} mio. kr. og i Million&aelig;rchancen, hvor vi hver uge tr&aelig;kker lod blandt alle r&aelig;kker om 2 x 1 mio. kr.",
      "disclaimer": "Spillet udbydes af Danske Lotteri Spil A/S. <a rel=\"noopener noreferrer\" href=\"https://danskespil.dk/regler--a--vilkaar/regler/spilleregler_dlo#eurojackpot\" target=\"_blank\">Se vilk&aring;r</a>",
      "id": "044b20ff-ef2e-4aea-a184-3607cfa2fe87",
      "templateName": "FreePrizeClaimReceiptData"
    }
  ]

  const poolFeed = [
    { "gameId": "", "poolSizeDecimal": 0, "poolSizeFormatted": "0", "secondPrizePoolSizeDecimal": 0, "secondPrizePoolSizeFormatted": "0", "drawDate": "0001-01-01T01:00:00+01:00", "gameStopDate": "0001-01-01T01:00:00+01:00", "gameUrl": "", "isOpen": true }, {
      "gameId": "altellerintet",
      "poolSizeDecimal": 50000000,
      "poolSizeFormatted": "50",
      "secondPrizePoolSizeDecimal": 0,
      "secondPrizePoolSizeFormatted": "0",
      "drawDate": "2021-07-14T20:30:00+02:00",
      "gameStopDate": "2021-07-14T20:30:00+02:00",
      "gameUrl": "/eurojackpot",
      "isOpen": false
    }, { "gameId": "eurojackpot", "poolSizeDecimal": 95000000, "poolSizeFormatted": "95", "secondPrizePoolSizeDecimal": 0, "secondPrizePoolSizeFormatted": "0", "drawDate": "2026-03-10T19:00:00+01:00", "gameStopDate": "2026-03-10T19:00:00+01:00", "gameUrl": "https://danskespil.dk/eurojackpot", "isOpen": true }, {
      "gameId": "jokerloerdag",
      "poolSizeDecimal": 0,
      "poolSizeFormatted": "0",
      "secondPrizePoolSizeDecimal": 0,
      "secondPrizePoolSizeFormatted": "0",
      "drawDate": "2026-03-07T20:00:00+01:00",
      "gameStopDate": "2026-03-07T20:00:00+01:00",
      "gameUrl": "https://danskespil.dk/lotto",
      "isOpen": false
    }, { "gameId": "lotto", "poolSizeDecimal": 10000000, "poolSizeFormatted": "10", "secondPrizePoolSizeDecimal": 0, "secondPrizePoolSizeFormatted": "0", "drawDate": "2026-03-14T20:00:00+01:00", "gameStopDate": "2026-03-14T20:00:00+01:00", "gameUrl": "https://danskespil.dk/lotto", "isOpen": true }, {
      "gameId": "maaljagt",
      "poolSizeDecimal": 0,
      "poolSizeFormatted": "0",
      "secondPrizePoolSizeDecimal": 0,
      "secondPrizePoolSizeFormatted": "0",
      "drawDate": "2023-03-06T18:55:00+01:00",
      "gameStopDate": "2023-03-06T18:55:00+01:00",
      "gameUrl": "https://danskespil.dk/oddset/maljagt?intcmp=kampagne_pulje_jackpot_maaljagt",
      "isOpen": false
    }, { "gameId": "jokeronsdag", "poolSizeDecimal": 7000000, "poolSizeFormatted": "7", "secondPrizePoolSizeDecimal": 0, "secondPrizePoolSizeFormatted": "0", "drawDate": "2026-03-11T18:00:00+01:00", "gameStopDate": "2026-03-11T18:00:00+01:00", "gameUrl": "", "isOpen": true }, {
      "gameId": "superpulje",
      "poolSizeDecimal": 5000000,
      "poolSizeFormatted": "5",
      "secondPrizePoolSizeDecimal": 0,
      "secondPrizePoolSizeFormatted": "0",
      "drawDate": "2017-05-10T20:00:00+02:00",
      "gameStopDate": "2017-05-10T20:00:00+02:00",
      "gameUrl": "",
      "isOpen": false
    }, { "gameId": "tips12", "poolSizeDecimal": 0, "poolSizeFormatted": "0", "secondPrizePoolSizeDecimal": 0, "secondPrizePoolSizeFormatted": "0", "drawDate": "2023-03-05T18:25:00+01:00", "gameStopDate": "2023-03-05T18:25:00+01:00", "gameUrl": "https://danskespil.dk/tips/tips12/spilnu.html?intcmp=kampagne_pulje_jackpot_tips12", "isOpen": false }, {
      "gameId": "tips13",
      "poolSizeDecimal": 0,
      "poolSizeFormatted": "0",
      "secondPrizePoolSizeDecimal": 0,
      "secondPrizePoolSizeFormatted": "0",
      "drawDate": "2023-03-07T20:40:00+01:00",
      "gameStopDate": "2023-03-07T20:40:00+01:00",
      "gameUrl": "https://danskespil.dk/tips/tips13/spilnu.html?intcmp=kampagne_pulje_jackpot_tips13",
      "isOpen": false
    }, { "gameId": "vikinglotto", "poolSizeDecimal": 95000000, "poolSizeFormatted": "95", "secondPrizePoolSizeDecimal": 0, "secondPrizePoolSizeFormatted": "0", "drawDate": "2026-03-11T18:00:00+01:00", "gameStopDate": "2026-03-11T18:00:00+01:00", "gameUrl": "https://danskespil.dk/vikinglotto", "isOpen": true }]

  return (
    <>
      <FreePrizeClaimReceipt dataComponents={dataComponents} poolFeed={poolFeed}/>
    </>
  )
}
