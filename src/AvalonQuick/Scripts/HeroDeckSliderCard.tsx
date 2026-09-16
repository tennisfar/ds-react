export const HeroDeckSliderCard = ({ num }: { num: number }) => {

  const images = [
    {
      fg: "https://ds-static.dk/dlo/-/media/fec7c6383de04642900e2b24a36ab095.png",
      bg: "https://ds-static.dk/dlo/-/media/30516f8f08c242688626efded5960d5e.jpg",
    },
    {
      fg: 'https://ds-static.dk/dlo/-/media/936a1746b3a14e7982ef4801ed645e38.png',
      bg: 'https://ds-static.dk/dlo/-/media/8d7cfb7de7cb4bba8f0109c10648d7bd.jpg'
    },
    {
      fg: 'https://ds-static.dk/dlo/-/media/b983095dda824af28c98a752975d23aa.png',
      bg: 'https://ds-static.dk/dlo/-/media/bd1ba9c5e8e7414b976ae4621f0dd6b4.png'
    },
    {
      fg: 'https://ds-static.dk/dlo/-/media/3db7b1085d224716a1b5ce58ecea8fba.png',
      bg: 'https://ds-static.dk/dlo/-/media/04c4ea06d8f14486b9af24e67bb5b20d.jpg'
    },
    {
      fg: 'https://ds-static.dk/dlo/-/media/799ae2a13a914307b35a15639dd694ba.png',
      bg: 'https://ds-static.dk/dlo/-/media/5cf8356cc585486a932b5f71b2fb6f14.jpg'
    },
    {
      fg: 'https://ds-static.dk/dlo/-/media/1fe0f540f4cf4d32b228cc0dd5bba2e2.png',
      bg: 'https://ds-static.dk/dlo/-/media/ada34c3e2fa44ccb9fcc2551d00c27ce.jpg'
    },
    {
      fg: 'https://ds-static.dk/dlo/-/media/6e36c7d3742c43f497b28dedf104b250.png',
      bg: 'https://ds-static.dk/dlo/-/media/b01e06caa29a402db7b4fb130e72981f.jpg'
    },
    {
      fg: 'https://ds-static.dk/dlo/-/media/66343f61e6f24613bf98de1a2251770f.png',
      bg: 'https://ds-static.dk/dlo/-/media/e7707eb557914a118737ef810af7953a.jpg'
    },
    {
      fg: 'https://ds-static.dk/dlo/-/media/4a0d71dfaa0343d38be30fc282c5556e.png',
      bg: 'https://ds-static.dk/dlo/-/media/ea050a1301ed468aa80b83ec688efd46.jpg'
    },
    {
      fg: 'https://ds-static.dk/dlo/-/media/1b48ac08790f47ffbf7c3a17714bf8e0.png',
      bg: 'https://ds-static.dk/dlo/-/media/67983adc80d947febb2e3e923e0b9135.jpg'
    },
    {
      fg: 'https://ds-static.dk/dlo/-/media/0acc49d1554642458dd6fcedb0142735.png',
      bg: 'https://ds-static.dk/dlo/-/media/68ea4347ac1749899a45e00876edbb55.jpg'
    },
    {
      fg: "https://ds-static.dk/dlo/-/media/fec7c6383de04642900e2b24a36ab095.png",
      bg: "https://ds-static.dk/dlo/-/media/30516f8f08c242688626efded5960d5e.jpg",
    },
    {
      fg: 'https://ds-static.dk/dlo/-/media/936a1746b3a14e7982ef4801ed645e38.png',
      bg: 'https://ds-static.dk/dlo/-/media/8d7cfb7de7cb4bba8f0109c10648d7bd.jpg'
    },
  ];

  return (
    <div className="hero-deck-slider__slide  cardXXX card--microXXX card--no-metaXXX tns-itemXXX tns-slide-clonedXXX has-eventsXXX" data-description="Vind op til 500.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]">
      <a href="/quick/spil/fuglevenner-droemmeland" data-href="/quick/spil/fuglevenner-droemmeland" className="hero-deck-slider__slide-card  card__linkXXX"
         data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/35f88ae6beb646b49092477564af9ca1.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/40eacd30a87245ad87fbcfb0af887e3a.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/63109e767fe0454e9a24a33c1385f857.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/3e4b649490fb49328e79d7e16291cebb.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/481aa49758d244e196a5c2bd303d3fe3.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/ae94e383d4114d5b848c0539e086a7a2.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/63109e767fe0454e9a24a33c1385f857.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}}]}">
        <div className="hero-deck-slider__ribbon hero-deck-slider__ribbon--top-left"><span>Top 10</span></div>
        {/*<div className="card__wrapper">*/}
          {/*<div className="card__images">*/}
            <img className="hero-deck-slider__slide-card-fg  card-image__overlayXXX" loading="lazy" src={images[num]?.fg} alt="Fuglevenner Drømmeland"/>
            <img className="hero-deck-slider__slide-card-bg  card-image__backgroundXXX" loading="lazy" src={images[num]?.bg} alt="Fuglevenner Drømmeland"/>
          {/*</div>*/}
          {/*<div className="card__content">*/}
          {/*  <div className="card__labels">*/}
          {/*    <div className="card__label card__label--price"><span className="price">SPIL NU - 5 kr.</span></div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        {/*</div>*/}
      </a>
      {/*<span className="card__counter"></span>*/}
      {/*<div className="card__meta"><span className="card__meta-1">Vind op til <span>500.000</span> kr.</span><span className="card__meta-2 js-card-title">Fuglevenner Drømmeland</span><span className="card__meta-3">Skrabespil</span></div>*/}
    </div>
  );
};
