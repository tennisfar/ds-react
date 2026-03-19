// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router';
import { FreePrizeClaimReceipt } from '@PATH.DS.KLUBLOTTO/Scripts/Components/FreePrizeClaimReceipt/FreePrizeClaimReceipt';
import { CrossSaleSpot } from '@PATH.KLUBLOTTO.VIEWS/CrossSaleSpot';
import { PageHeader } from '@PATH.KLUBLOTTO.VIEWS/PageHeader';
import { NumberGamesType } from '@PATH.DS.KLUBLOTTO/Scripts/Types/numberGames';

export const Route = createFileRoute('/klublotto/FreePrizeClaimReceipt')({
  component: RouteComponent,
});

function RouteComponent() {
  const dataComponents = [
    {
      numberGamesType: 'lotto' as NumberGamesType,
      title: 'Din indløsning er gennemført',
      text: 'Du er med i tr&aelig;kningen om {poolsize} mio. kr. og i Million&aelig;rchancen, hvor vi hver uge tr&aelig;kker lod blandt alle r&aelig;kker om 2 x 1 mio. kr.',
      disclaimer:
        'Spillet udbydes af Danske Lotteri Spil A/S. <a rel="noopener noreferrer" href="https://danskespil.dk/regler--a--vilkaar/regler/spilleregler_dlo#lotto" target="_blank">Se vilk&aring;r</a>',
      id: '044b20ff-ef2e-4aea-a184-3607cfa2fe87',
      templateName: 'FreePrizeClaimReceiptData',
    },
    {
      numberGamesType: 'vikinglotto' as NumberGamesType,
      title: 'Din indløsning er gennemført',
      text: 'Du er med i tr&aelig;kningen om {poolsize} mio. kr. og i Million&aelig;rchancen, hvor vi hver uge tr&aelig;kker lod blandt alle r&aelig;kker om 2 x 1 mio. kr.',
      disclaimer:
        'Spillet udbydes af Danske Lotteri Spil A/S. <a rel="noopener noreferrer" href="https://danskespil.dk/regler--a--vilkaar/regler/spilleregler_dlo#vikinglotto" target="_blank">Se vilk&aring;r</a>',
      id: '044b20ff-ef2e-4aea-a184-3607cfa2fe87',
      templateName: 'FreePrizeClaimReceiptData',
    },
    {
      numberGamesType: 'eurojackpot' as NumberGamesType,
      title: 'Din indløsning er gennemført',
      text: 'Du er med i tr&aelig;kningen om {poolsize} mio. kr. og i Million&aelig;rchancen, hvor vi hver uge tr&aelig;kker lod blandt alle r&aelig;kker om 2 x 1 mio. kr.',
      disclaimer:
        'Spillet udbydes af Danske Lotteri Spil A/S. <a rel="noopener noreferrer" href="https://danskespil.dk/regler--a--vilkaar/regler/spilleregler_dlo#eurojackpot" target="_blank">Se vilk&aring;r</a>',
      id: '044b20ff-ef2e-4aea-a184-3607cfa2fe87',
      templateName: 'FreePrizeClaimReceiptData',
    },
  ];

  return (
    <>
      <PageHeader>Dine præmier</PageHeader>

      <CrossSaleSpot/>

      <FreePrizeClaimReceipt dataComponents={dataComponents}/>
    </>
  );
}
