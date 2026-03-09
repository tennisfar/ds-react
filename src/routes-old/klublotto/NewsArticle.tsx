import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/klublotto/NewsArticle')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="kl-news-article" data-tracking="NewsArticle" data-tracking-category="klub_lotto">
      <div className="kl-news-article__logo">
        <img src="https://ds-static.dk/dlo/-/media/ad03277c96b14e2ab21e36e0e44bbc22.svg" alt="" />
      </div>
      <div className="kl-news-article__title">
        Joan fra Helsinge vandt pludselig 200.000 kroner: "Jeg overvejer at købe den Copenhell billet allerede nu"
      </div>
      <div className="kl-news-article__image">
        <picture>
          <source srcSet="https://picsum.photos/801/800" media="(min-width: 1024px)" />
          <source srcSet="https://picsum.photos/801/800" media="(min-width: 768px)" />
          <source srcSet="https://picsum.photos/801/800" media="(max-width: 767px)" />
          <img src="https://picsum.photos/801/800" alt="" />
        </picture>
      </div>
      <div className="kl-news-article__content">
        <strong>
          Kvinde fra Helsinge var en af de meget heldige medlemmer af Danske Spils Klub Lotto, som vandt månedspræmien
          på 200.000 kroner. Det kom meget bag på hende, men nu er hun klar til at bruge nogle af pengene.
        </strong>
        <br />
        <br />
        Joan Mønster Jørgensen fra Helsinge fik mandag overrakt en check på 200.000 kroner af Malene Mølgaard, som er
        adm. direktør i Danske Lotteri Spil, der står bag Klub Lotto. Joan havde nemlig vundet månedskonkurrencen i den
        gratis klub, som Danske Spil har lavet - og det kom bag på hende.
        <br />
        <br />
        "Det var meget uventet, for jeg er med i Klub Lotto for at spille de små spil. Dem spiller jeg med min mand, og
        det hygger vi os med," fortæller Joan midt i Kvickly i Helsinge, hvor også lokalpressen er dukket op for at tale
        med hende om gevinsten.
        <br />
        <br />
        Joan arbejder som akutsygeplejerske og har tre sønner. Og så har hun en forkærlighed for en bestemt musikgenre,
        som hun bl.a. deler med flere medlemmer af familien.
        <br />
        <br />
        "Ja, jeg overvejer at købe den Copenhell billet allerede nu. Vi tager afsted som familie for at opleve det
        sammen, og min mand er også med, selvom det ikke er det musik, han er mest til. Vi andre er til hård rock og
        metal, og vi skal faktisk også til koncert med Sabaton i den her uge. Det er et band, der bruger musikken til en
        form for historieundervisning om virkelige hændelser," siger Joan.
        <br />
        <br />
        De 200.000 kroner er allerede blevet udbetalt til Joans konto, og hun har allerede en plan for, hvad der skal
        ske med dem.
        <br />
        <br />
        "Jeg bruger de fleste af dem til at lave en god buffer, for det er rart at have - især, når man snart er
        folkepensionist. Og så har jeg taget 25.000 ud, som skal gå til sjov og spas. Jeg er meget impulsiv, så jeg skal
        nok finde på noget godt ud over alle de ting, jeg allerede har planlagt det næste år. Jeg er typen der, hvis jeg
        har lyst til noget, så gør jeg det. Drømmen er at køre Europa tyndt i autocamper, men det kræver en lidt større
        gevinst," griner Joan.
        <br />
        <br />
        Der trækkes lod om en ny vinder af 200.000 kroner i Klub Lotto mandag d. 6. januar. Det er gratis at være med i
        klubben, og man kan ved at løse små ordspil og lignende også vinde ugepræmier som fx biografbilletter og gratis
        Lotto rækker.
        <br />
        <div>&nbsp;</div>
      </div>
    </div>
  );
}
