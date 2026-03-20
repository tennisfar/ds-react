// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router';
import { NewPrizeNotification } from '@PATH.DS.KLUBLOTTO/Scripts/Components/NewPrizeNotification/NewPrizeNotification';
import Popup from '@PATH.DS.KLUBLOTTO/Scripts/Components/Popup/Popup';

export const Route = createFileRoute('/klublotto/NewPrizeNotification')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => ({
    id: search.id as number | undefined,
  }),
});

function RouteComponent() {
  return (
    <>
      <Popup/>
      <NewPrizeNotification
        linkToRedeemPage={{
          anchor: "",
          class: "",
          query: "",
          style: "",
          target: "",
          targetId: "7d05bdf9-82ab-4e75-80f3-556b629c7d13",
          text: "Se præmie",
          title: "",
          type: 4,
          url: "/klublotto/dine-praemier",
        }}
        image={{
          "alt": "",
          "border": "",
          "class": "",
          "height": 0,
          "hSpace": 0,
          "src": "https://ds-static.dk/dlo/-/media/34c3d54a055b43da969182e33cf294f3.svg",
          "vSpace": 0,
          "width": 0,
          "mediaId": "34c3d54a-055b-43da-9691-82e33cf294f3",
          "title": "",
          "language": {
            "Name": "da"
          },
          "mediaExists": true
        }}
        referencesToIgnore={''}
        titleNewPrize={'Du har en præmie'}
        titlePrizeExpires={'Din præmie udløber snart'}
      />
    </>
  );
}
