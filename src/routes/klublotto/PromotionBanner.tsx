// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router';
import { ContestOverview } from '@PATH.KLUBLOTTO.VIEWS/ContestOverview';
import { PromotionBanner } from '@PATH.KLUBLOTTO.VIEWS/PromotionBanner';
import { RedeemSpot } from '@PATH.DS.KLUBLOTTO/Scripts/Components/RedeemSpot/RedeemSpot';

export const Route = createFileRoute('/klublotto/PromotionBanner')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => ({
    id: search.id as number | undefined,
  }),
});

function RouteComponent() {
  return (
    <>
      <RedeemSpot ctaLabel={"Indløs nu"}
                  image={{
                    "alt": "",
                    "border": "",
                    "class": "",
                    "height": 82,
                    "hSpace": 0,
                    "src": "https://ds-static.dk/dlo/-/media/31e43571abab4ee598e182405de32355.svg",
                    "vSpace": 0,
                    "width": 82,
                    "mediaId": "31e43571-abab-4ee5-98e1-82405de32355",
                    "title": "",
                    "language": {
                      "Name": "da"
                    },
                    "mediaExists": true
                  }}
                  linkToRedeemPage={{
                    "anchor": "",
                    "class": "",
                    "text": "Lotto",
                    "query": "",
                    "title": "",
                    "url": "/klublotto/dine-praemier/lotto",
                    "target": "",
                    "targetId": "412918b7-229e-4f1c-a6a2-76b1c7a32f45",
                    "type": 4,
                    "style": ""
                  }}
                  reference={'2'}
                  title={"Velkommen"}
                  text={"Vi har to gratis Lotto rækker klar til dig – indløs dem til næste Lotto trækning"}/>
      <PromotionBanner/>
      <ContestOverview/>
    </>
  );
}
