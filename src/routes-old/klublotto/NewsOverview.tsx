import { createFileRoute } from '@tanstack/react-router';
import heart from '@KlubLotto/Graphics/News/news-heart.svg';

export const Route = createFileRoute('/klublotto/NewsOverview')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="kl-news-overview" data-tracking="NewsOverview" data-tracking-category="klub_lotto">
      <div className="kl-news-overview__header">
        Her finder du ægte, rørende og sjove historier fra rigtige vindere i Danske Spils lotterier og skrabespil.
      </div>

      <div className="kl-news-overview__articles">
        <div className="kl-news-overview__article">
          <div className="kl-news-overview__article-image">
            <picture>
              <source srcSet="https://picsum.photos/801/800" media="(min-width: 1024px)" />
              <source srcSet="https://picsum.photos/802/800" media="(min-width: 768px)" />
              <img src="https://picsum.photos/803/800" alt="" />
            </picture>
          </div>

          <a
            href="/klublotto/millionaernyt/vinder-i-lotto---penge-skal-bruges-paa-at-glaede-folk"
            className="kl-news-overview__article-content"
            data-tracking-label="Vinder i Lotto - Penge skal bruges på at glæde folk"
          >
            <div className="kl-news-overview__article-logo">
              <img src={heart} alt="" />
            </div>
            <div className="kl-news-overview__article-brand">
              <img src="https://ds-static.dk/dlo/-/media/ad03277c96b14e2ab21e36e0e44bbc22.svg" alt="" />
            </div>
            <div className="kl-news-overview__article-title">
              Joan fra Helsinge vandt pludselig 200.000 kroner: "Jeg overvejer at købe den Copenhell billet allerede nu"
            </div>
          </a>
        </div>
        <div className="kl-news-overview__article">
          <div className="kl-news-overview__article-image">
            <picture>
              <source srcSet="https://picsum.photos/804/800" media="(min-width: 1024px)" />
              <source srcSet="https://picsum.photos/805/800" media="(min-width: 768px)" />
              <img src="https://picsum.photos/806/800" alt="" />
            </picture>
          </div>

          <a
            href="/klublotto/millionaernyt/vinder-1000000-i-lotto---koeber-kvalitetstid-med-familien-for-alle-pengene"
            className="kl-news-overview__article-content"
            data-tracking-label="Vinder 1.000.000 kr. i Lotto - Køber kvalitetstid med familien for alle pengene"
          >
            <div className="kl-news-overview__article-logo">
              <img src={heart} alt="" />
            </div>
            <div className="kl-news-overview__article-brand">
              <img src="https://ds-static.dk/dlo/-/media/ad03277c96b14e2ab21e36e0e44bbc22.svg" alt="" />
            </div>
            <div className="kl-news-overview__article-title">
              Vinder 200.000 kroner i Klub Lotto: “Jeg har gået rundt og grinet i et par dage!”
            </div>
          </a>
        </div>
        <div className="kl-news-overview__article">
          <div className="kl-news-overview__article-image">
            <picture>
              <source srcSet="https://picsum.photos/807/800" media="(min-width: 1024px)" />
              <source srcSet="https://picsum.photos/808/800" media="(min-width: 768px)" />
              <img src="https://picsum.photos/809/800" alt="" />
            </picture>
          </div>

          <a
            href="/klublotto/millionaernyt/rustet-til-daarlige-nyheder-vandt-million-i-lotto-da-bilen-roeg-paa-vaerksted"
            className="kl-news-overview__article-content"
            data-tracking-label="Rustet til dårlige nyheder Vandt million i Lotto da bilen røg på værksted"
          >
            <div className="kl-news-overview__article-logo">
              <img src={heart} alt="" />
            </div>
            <div className="kl-news-overview__article-brand">
              <img src="https://ds-static.dk/dlo/-/media/ad03277c96b14e2ab21e36e0e44bbc22.svg" alt="" />
            </div>
            <div className="kl-news-overview__article-title">
              Rustet til dårlige nyheder Vandt million i Lotto da bilen røg på værksted
            </div>
          </a>
        </div>
        <div className="kl-news-overview__article">
          <div className="kl-news-overview__article-image">
            <picture>
              <source srcSet="https://picsum.photos/810/800" media="(min-width: 1024px)" />
              <source srcSet="https://picsum.photos/811/800" media="(min-width: 768px)" />
              <img src="https://picsum.photos/812/800" alt="" />
            </picture>
          </div>

          <a
            href="/klublotto/millionaernyt/millionaer-aergrer-sig-kun-over-en-ting---at-han-ikke-snakkede-mere-med-kvinden-i-koeen"
            className="kl-news-overview__article-content"
            data-tracking-label="Millionær ærgrer sig kun over en ting - at han ikke snakkede mere med kvinden i køen"
          >
            <div className="kl-news-overview__article-logo">
              <img src={heart} alt="" />
            </div>
            <div className="kl-news-overview__article-brand">
              <img src="https://ds-static.dk/dlo/-/media/ad03277c96b14e2ab21e36e0e44bbc22.svg" alt="" />
            </div>
            <div className="kl-news-overview__article-title">
              Millionær ærgrer sig kun over en ting - at han ikke snakkede mere med kvinden i køen
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
