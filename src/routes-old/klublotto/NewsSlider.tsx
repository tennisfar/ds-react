import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { NewsSlider } from '@KlubLotto/Scripts/Components/NewsSlider/NewsSlider.tsx';
// @ts-ignore
import { SliderIndicator } from '@KlubLotto/Scripts/Components/SliderIndicator/SliderIndicator.tsx';
import nextArrow from '@KlubLotto/Graphics/News/next-arrow.svg';

export const Route = createFileRoute('/klublotto/NewsSlider')({
  component: RouteComponent,
});

function RouteComponent() {
  const props = {
    slides: [
      {
        title: 'Bedstemor drømte om 400 heste under kølerhjelmen - så vandt hun 1.000.000 kr. i Lotto',
        desktopImageSrc: 'https://picsum.photos/801/800',
        tabletImageSrc: 'https://picsum.photos/801/800',
        mobileImageSrc: 'https://picsum.photos/801/800',
        brandLogoWhite: <img src={'/graphics/klublotto/newsslider/lotto-white.svg'} alt={''} />,
        link: 'NewsSlider#slide1',
      },
      {
        title: 'Campinggal nordjyde vinder 10.000.000 kr. og køber ny campingvogn - overvejer stærkt nummer to',
        desktopImageSrc: 'https://picsum.photos/802/800',
        tabletImageSrc: 'https://picsum.photos/802/800',
        mobileImageSrc: 'https://picsum.photos/802/800',
        brandLogoWhite: <img src={'/graphics/klublotto/newsslider/lotto-white.svg'} alt={''} />,
        link: 'NewsSlider#slide2',
      },
      {
        title: 'Den ikke-så-anonyme-millionær på Lotto - Jeg har selv hængt mit foto op nede hos købmanden',
        desktopImageSrc: 'https://picsum.photos/803/800',
        tabletImageSrc: 'https://picsum.photos/803/800',
        mobileImageSrc: 'https://picsum.photos/803/800',
        brandLogoWhite: <img src={'/graphics/klublotto/newsslider/lotto-white.svg'} alt={''} />,
        link: 'NewsSlider#slide3',
      },
      {
        title: 'Følger familietraditionen - bliver millionær på Lotto',
        desktopImageSrc: 'https://picsum.photos/804/800',
        tabletImageSrc: 'https://picsum.photos/804/800',
        mobileImageSrc: 'https://picsum.photos/804/800',
        brandLogoWhite: <img src={'/graphics/klublotto/newsslider/lotto-white.svg'} alt={''} />,
        link: 'NewsSlider#slide4',
      },
    ],
  };

  return (
    <div className="kl-news-slider" data-tracking="NewsSlider" data-tracking-category="klub_lotto">
      <div className="kl-news-slider__header">Millionærnyt</div>

      <div className="relative">
        <div className="kl-news-slider__navigation kl-news-slider__navigation--left kl-news-slider__navigation--hidden">
          <img src={nextArrow} alt="Forrige" />
        </div>
        <div className="kl-news-slider__navigation kl-news-slider__navigation--right kl-news-slider__navigation--hidden">
          <img src={nextArrow} alt="Næste" />
        </div>

        <div className="kl-news-slider__inner">
          {props.slides.map((newsItem, index) => (
            <a
              href={newsItem.link}
              className="kl-news-slider__slide"
              id={`slide${index}`}
              data-tracking-label="Title 1"
              key={index}
            >
              <div className="kl-news-slider__slide-image">
                <picture>
                  <source srcSet={newsItem.desktopImageSrc} media="(min-width: 1024px)" />
                  <source srcSet={newsItem.tabletImageSrc} media="(min-width: 768px)" />
                  <source srcSet={newsItem.mobileImageSrc} media="(max-width: 767px)" />
                  <img src={newsItem.desktopImageSrc} alt={newsItem.title} />
                </picture>
              </div>

              <div className="kl-news-slider__slide-content">
                <div className="kl-news-slider__slide-content-brand">{newsItem.brandLogoWhite}</div>
                <div className="kl-news-slider__slide-content-title">{newsItem.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div
        className="kl-slider-indicator"
        data-module="KlubLottoSliderIndicator"
        data-settings='{"slideContainer":".kl-news-slider__inner","numberOfSlides":@numberOfSlides}'
      >
        <SliderIndicator slideContainer=".kl-news-slider__inner" numberOfSlides={props.slides.length} />
      </div>

      <div className="kl-news-slider__cta">
        <a
          href="NewsSlider#alle-historier"
          className="kl-button kl-button--primary"
          data-tracking-label="Alle historier"
        >
          Alle historier
        </a>
      </div>

      <div data-module="KlubLottoNewsSlider" data-settings='{"sliderSelector":".kl-news-slider"}'>
        <NewsSlider sliderSelector=".kl-news-slider" />
      </div>
    </div>
  );
}
