import { createFileRoute } from '@tanstack/react-router'
import { HeroDeckSlider } from '../../DanskeSpil/Quick/HeroDeckSlider/HeroDeckSlider';

export const Route = createFileRoute('/quick/HeroDeckSliderSpot')({
  component: RouteComponent,
})

const originalHtml = `
<div class="quick-games">
   <div class="hero-deck__background" style="background-image: url('https://ds-static.dk/dlo/-/media/a332a93629bd4664b54c3a87b6b69cfe.jpg')">
      <div class="container hero-deck__hero-container">
         <div class="hero-deck__hero">
            <img class="hero-deck__hero-image" src="https://ds-static.dk/dlo/-/media/34b8cb51cd4d4b86810dabcc8b2a18c7.png">
            <div class="hero-deck__hero-additional-images">
               <div class="bounce additional-images additional-images--position-1"><img src="https://ds-static.dk/dlo/-/media/79616d2a070240a6b9217672426b4ee5.png">                        </div>
               <div class="bounce additional-images additional-images--position-2"><img src="https://ds-static.dk/dlo/-/media/8cbeaeeae96b4c8bb337143798a28693.png">                        </div>
               <div class="bounce additional-images additional-images--position-3"><img src="https://ds-static.dk/dlo/-/media/b2251df3c13d4df3876f6e10993ef7b7.png">                        </div>
               <div class="bounce additional-images additional-images--position-4"><img src="https://ds-static.dk/dlo/-/media/6daf865d0572400e980365a2a5d87f9d.png">                        </div>
               <div class="bounce additional-images additional-images--position-5"><img src="https://ds-static.dk/dlo/-/media/2c753d70210f4f8f8ba955b753c2d1dc.png">                        </div>
            </div>
         </div>
         <div class="hero-deck__hero-texts-wrapper">
            <div class="heading">
               <h1 class="title">Udvalgte spil</h1>
            </div>
            <a class="quick-button js-hero-deck-link" href="/quick/spil/fugle-i-paradis"><span>SPIL NU - 5 Kr.</span></a>
            <div class="hero-deck__hero-texts">
               <p class="hero-deck__hero-prize-text">Vind op til <span>400.000</span> kr.</p>
               <h3 class="hero-deck__hero-title">Fugle i Paradis</h3>
               <p class="hero-deck__hero-type-text">Skrabespil</p>
            </div>
         </div>
      </div>
      <div class="container hero-deck__slider-container">
         <div class="tns-outer" id="tns1-ow">
            <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">18 to 25</span>  of 11</div>
            <div id="tns1-mw" class="tns-ovh">
               <div class="tns-inner" id="tns1-iw">
                  <div class="hero-deck__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns1" style="transition-duration: 0s; transform: translate3d(-37.7778%, 0px, 0px);">
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 500.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/fuglevenner-droemmeland" data-href="/quick/spil/fuglevenner-droemmeland" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/35f88ae6beb646b49092477564af9ca1.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/40eacd30a87245ad87fbcfb0af887e3a.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/63109e767fe0454e9a24a33c1385f857.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/3e4b649490fb49328e79d7e16291cebb.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/481aa49758d244e196a5c2bd303d3fe3.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/ae94e383d4114d5b848c0539e086a7a2.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/63109e767fe0454e9a24a33c1385f857.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/3db7b1085d224716a1b5ce58ecea8fba.png" alt="Fuglevenner Drømmeland">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/04c4ea06d8f14486b9af24e67bb5b20d.jpg" alt="Fuglevenner Drømmeland"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>500.000</span> kr.</span><span class="card__meta-2 js-card-title">Fuglevenner Drømmeland</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 400.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/nattens-droemme" data-href="/quick/spil/nattens-droemme" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/b6da9d3d996147b3b31d89339346e704.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/6c356c40db3f4e44a11894f1cf3a3210.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/12cabc8fcf334463b2dc43e87d0f5204.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/281329567b9e494fb96049195fe23215.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/7256eaeb049f4960a31c1163530190e2.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/777449396fea464eac91d735f05a46be.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/1401810976594b758a949e4224cb466e.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/799ae2a13a914307b35a15639dd694ba.png" alt="Nattens drømme">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/5cf8356cc585486a932b5f71b2fb6f14.jpg" alt="Nattens drømme"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>400.000</span> kr.</span><span class="card__meta-2 js-card-title">Nattens drømme</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Spil og vind op til 500.000 kr." data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/ellens-eventyr" data-href="/quick/spil/ellens-eventyr" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/0881dbfb0f6441f78f5a4d2464ce02db.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/be66fcbe9b0042a2afdc374280c31aa3.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/9b3f10abe2a64452bf64fa2308433f53.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/421d18df33a84c7ea19e97b4a262f1a8.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/f31f91e4df0b47e2a5c1c826db2f65b0.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/663c73b9c0c042748dc12ddbb463f567.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/203ae8e54ad045be8200186e7b24ffe4.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/1fe0f540f4cf4d32b228cc0dd5bba2e2.png" alt="Ellens Eventyr">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/ada34c3e2fa44ccb9fcc2551d00c27ce.jpg" alt="Ellens Eventyr"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>500.000</span> kr.</span><span class="card__meta-2 js-card-title">Ellens Eventyr</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 400.000 kr." data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;,&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/kanonkuglen-2" data-href="/quick/spil/kanonkuglen-2" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/e91232d0a88b4b9296ebcb80ace25647.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/05dc700f0c1c44888089ed34e4789f60.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/346a112f8a194d17a9a53b1935cc6381.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/9968268613a34316bb007f3ece0366e1.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2bee6ef67bf54dba9effb40d19f21c3f.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/9968268613a34316bb007f3ece0366e1.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2bee6ef67bf54dba9effb40d19f21c3f.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}}]}">
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/6e36c7d3742c43f497b28dedf104b250.png" alt="Kanonkuglen 2">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/b01e06caa29a402db7b4fb130e72981f.jpg" alt="Kanonkuglen 2"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>400.000</span> kr.</span><span class="card__meta-2 js-card-title">Kanonkuglen 2</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 250.000 kr. " data-categories="[&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;,&quot;367da42f37334cf99a15b25a3aabe2ba&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/xo" data-href="/quick/spil/xo" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/031e52c7f69245329417e0960f26d04b.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/70a3851721c842c197a3398176ab5813.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/a844eba5855542919f795e3610e58aeb.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/f17d83076c9f43ca9ffd116fa9bf39ff.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/fa751e1fcbfe45d3b56516dd57f668c7.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/029934ce9e434ddc8f662bdb5122c58f.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/35d22e680e6a468e8c7b4723fe71799e.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="NY"><span>NY</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/66343f61e6f24613bf98de1a2251770f.png" alt="XO">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/e7707eb557914a118737ef810af7953a.jpg" alt="XO"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 2 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>250.000</span> kr.</span><span class="card__meta-2 js-card-title">XO</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 500.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/rigtige-roer" data-href="/quick/spil/rigtige-roer" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/5f69000b415f4babaab9a5f1f49aeb4d.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/b67300c0fb78457fbc93c2eb5c25eeb2.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2193985c9e474de687ac4a64c9efa51a.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/f5c4451b928a4d3d87e54426bb41518e.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/7ddf474c15df4d68af5484fa20440476.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/ce29061e28cf4fcd9b075265fa81f5b6.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/ee809d99b8734c548cd087c45ca1263b.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="NY"><span>NY</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/4a0d71dfaa0343d38be30fc282c5556e.png" alt="Rigtige Rør">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/ea050a1301ed468aa80b83ec688efd46.jpg" alt="Rigtige Rør"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>500.000</span> kr.</span><span class="card__meta-2 js-card-title">Rigtige Rør</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 400.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;,&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/fugle-i-paradis" data-href="/quick/spil/fugle-i-paradis" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/a332a93629bd4664b54c3a87b6b69cfe.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/34b8cb51cd4d4b86810dabcc8b2a18c7.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/79616d2a070240a6b9217672426b4ee5.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/8cbeaeeae96b4c8bb337143798a28693.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/b2251df3c13d4df3876f6e10993ef7b7.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/6daf865d0572400e980365a2a5d87f9d.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2c753d70210f4f8f8ba955b753c2d1dc.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="NY"><span>NY</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/1b48ac08790f47ffbf7c3a17714bf8e0.png" alt="Fugle i Paradis">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/67983adc80d947febb2e3e923e0b9135.jpg" alt="Fugle i Paradis"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>400.000</span> kr.</span><span class="card__meta-2 js-card-title">Fugle i Paradis</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 1 mio. kr." data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;,&quot;{24481EE8-F5F5-4795-B564-0EB87FABD311}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/paaskeaeg" data-href="/quick/spil/paaskeaeg" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/bdac87ec733b4a029f3bd31d59bf5b65.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/5346ded2726a415c8674e770725b52a8.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/26f53c3c01414d8e931b66819dcc92f6.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/27000455cec84949a8edd1ceb3bb82e5.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/ab969275d123446f993548e95f2f9efd.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/6f6a16fd37924e49aeb12d334ee00a7f.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/26f53c3c01414d8e931b66819dcc92f6.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}}]}">
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/0acc49d1554642458dd6fcedb0142735.png" alt="Påskeæg">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/68ea4347ac1749899a45e00876edbb55.jpg" alt="Påskeæg"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 50 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>1.000.000</span> kr.</span><span class="card__meta-2 js-card-title">Påskeæg</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 20.000 kr." data-categories="[&quot;bee9d74e97654cfdb5d7bc257a6e3d53&quot;,&quot;1d660e637d9746f6a329f9a4567d1bca&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;,&quot;{24481EE8-F5F5-4795-B564-0EB87FABD311}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/paaskekyllingen" data-href="/quick/spil/paaskekyllingen" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/d42e990ef6874f568941dc2939c40d1e.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/3023a1c030e3432eb13a4e0d23f723e1.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2f442df9b04a4bf3b88f10e40c4e805d.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/081311055f6742829547633e1e1f31ad.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2b52dc92a9814874afefe7e26fd02b27.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2b52dc92a9814874afefe7e26fd02b27.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2f442df9b04a4bf3b88f10e40c4e805d.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/fec7c6383de04642900e2b24a36ab095.png" alt="Påskekyllingen">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/30516f8f08c242688626efded5960d5e.jpg" alt="Påskekyllingen"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 2 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>20.000</span> kr.</span><span class="card__meta-2 js-card-title">Påskekyllingen</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 500.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/feen-i-skoven" data-href="/quick/spil/feen-i-skoven" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/585b2cb01cdc4dec8ae6e92d4e64fa87.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/1d3a7cee5e35483db3131bc95954cfff.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/b1cc8c7e3e414ba2a0cdd126132dd18c.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/32b9ecc683334640814479cea42370e9.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/32b9ecc683334640814479cea42370e9.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/bbcab1dca2dc4aa7b7db1524fdc518f3.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/1a5f80c8d6db44d3b1a34055b1eeae45.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Populær"><span>Populær</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/936a1746b3a14e7982ef4801ed645e38.png" alt="Feen i skoven">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/8d7cfb7de7cb4bba8f0109c10648d7bd.jpg" alt="Feen i skoven"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>500.000</span> kr.</span><span class="card__meta-2 js-card-title">Feen i skoven</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 400.000 kr. " data-categories="[&quot;2dea5aab18ef43068102501f6464499c&quot;,&quot;bee9d74e97654cfdb5d7bc257a6e3d53&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;,&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/guldaaren" data-href="/quick/spil/guldaaren" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/6a4be5a7c54d4dd699fd6158f58c0872.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/abd74d7d9db34021b2802681b0553ed4.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/6decfed2a01a48039aa200e4b27e13c2.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/6adaf66506d94d018b03ab5562894bf1.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/650ff5a0a19a4ff0b9015dc1d9a01f6d.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/b337cea3c37b4d6d85602b252a274a00.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/61da62036fb747049c2972a48bc4056f.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/b983095dda824af28c98a752975d23aa.png" alt="Guldåren">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/bd1ba9c5e8e7414b976ae4621f0dd6b4.png" alt="Guldåren"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 10 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>400.000</span> kr.</span><span class="card__meta-2 js-card-title">Guldåren</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 500.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/fuglevenner-droemmeland" data-href="/quick/spil/fuglevenner-droemmeland" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/35f88ae6beb646b49092477564af9ca1.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/40eacd30a87245ad87fbcfb0af887e3a.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/63109e767fe0454e9a24a33c1385f857.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/3e4b649490fb49328e79d7e16291cebb.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/481aa49758d244e196a5c2bd303d3fe3.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/ae94e383d4114d5b848c0539e086a7a2.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/63109e767fe0454e9a24a33c1385f857.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/3db7b1085d224716a1b5ce58ecea8fba.png" alt="Fuglevenner Drømmeland">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/04c4ea06d8f14486b9af24e67bb5b20d.jpg" alt="Fuglevenner Drømmeland"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>500.000</span> kr.</span><span class="card__meta-2 js-card-title">Fuglevenner Drømmeland</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 400.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/nattens-droemme" data-href="/quick/spil/nattens-droemme" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/b6da9d3d996147b3b31d89339346e704.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/6c356c40db3f4e44a11894f1cf3a3210.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/12cabc8fcf334463b2dc43e87d0f5204.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/281329567b9e494fb96049195fe23215.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/7256eaeb049f4960a31c1163530190e2.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/777449396fea464eac91d735f05a46be.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/1401810976594b758a949e4224cb466e.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/799ae2a13a914307b35a15639dd694ba.png" alt="Nattens drømme">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/5cf8356cc585486a932b5f71b2fb6f14.jpg" alt="Nattens drømme"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>400.000</span> kr.</span><span class="card__meta-2 js-card-title">Nattens drømme</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Spil og vind op til 500.000 kr." data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/ellens-eventyr" data-href="/quick/spil/ellens-eventyr" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/0881dbfb0f6441f78f5a4d2464ce02db.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/be66fcbe9b0042a2afdc374280c31aa3.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/9b3f10abe2a64452bf64fa2308433f53.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/421d18df33a84c7ea19e97b4a262f1a8.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/f31f91e4df0b47e2a5c1c826db2f65b0.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/663c73b9c0c042748dc12ddbb463f567.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/203ae8e54ad045be8200186e7b24ffe4.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/1fe0f540f4cf4d32b228cc0dd5bba2e2.png" alt="Ellens Eventyr">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/ada34c3e2fa44ccb9fcc2551d00c27ce.jpg" alt="Ellens Eventyr"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>500.000</span> kr.</span><span class="card__meta-2 js-card-title">Ellens Eventyr</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 400.000 kr." data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;,&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/kanonkuglen-2" data-href="/quick/spil/kanonkuglen-2" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/e91232d0a88b4b9296ebcb80ace25647.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/05dc700f0c1c44888089ed34e4789f60.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/346a112f8a194d17a9a53b1935cc6381.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/9968268613a34316bb007f3ece0366e1.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2bee6ef67bf54dba9effb40d19f21c3f.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/9968268613a34316bb007f3ece0366e1.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2bee6ef67bf54dba9effb40d19f21c3f.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}}]}">
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/6e36c7d3742c43f497b28dedf104b250.png" alt="Kanonkuglen 2">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/b01e06caa29a402db7b4fb130e72981f.jpg" alt="Kanonkuglen 2"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>400.000</span> kr.</span><span class="card__meta-2 js-card-title">Kanonkuglen 2</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 250.000 kr. " data-categories="[&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;,&quot;367da42f37334cf99a15b25a3aabe2ba&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/xo" data-href="/quick/spil/xo" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/031e52c7f69245329417e0960f26d04b.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/70a3851721c842c197a3398176ab5813.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/a844eba5855542919f795e3610e58aeb.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/f17d83076c9f43ca9ffd116fa9bf39ff.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/fa751e1fcbfe45d3b56516dd57f668c7.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/029934ce9e434ddc8f662bdb5122c58f.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/35d22e680e6a468e8c7b4723fe71799e.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="NY"><span>NY</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/66343f61e6f24613bf98de1a2251770f.png" alt="XO">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/e7707eb557914a118737ef810af7953a.jpg" alt="XO"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 2 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>250.000</span> kr.</span><span class="card__meta-2 js-card-title">XO</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-cloned has-events" data-description="Vind op til 500.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" aria-hidden="true" tabindex="-1">
                        <a href="/quick/spil/rigtige-roer" data-href="/quick/spil/rigtige-roer" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/5f69000b415f4babaab9a5f1f49aeb4d.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/b67300c0fb78457fbc93c2eb5c25eeb2.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2193985c9e474de687ac4a64c9efa51a.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/f5c4451b928a4d3d87e54426bb41518e.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/7ddf474c15df4d68af5484fa20440476.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/ce29061e28cf4fcd9b075265fa81f5b6.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/ee809d99b8734c548cd087c45ca1263b.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="NY"><span>NY</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/4a0d71dfaa0343d38be30fc282c5556e.png" alt="Rigtige Rør">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/ea050a1301ed468aa80b83ec688efd46.jpg" alt="Rigtige Rør"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>500.000</span> kr.</span><span class="card__meta-2 js-card-title">Rigtige Rør</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-active has-events" data-description="Vind op til 400.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;,&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;]" id="tns1-item0">
                        <a href="/quick/spil/fugle-i-paradis" data-href="/quick/spil/fugle-i-paradis" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/a332a93629bd4664b54c3a87b6b69cfe.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/34b8cb51cd4d4b86810dabcc8b2a18c7.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/79616d2a070240a6b9217672426b4ee5.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/8cbeaeeae96b4c8bb337143798a28693.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/b2251df3c13d4df3876f6e10993ef7b7.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/6daf865d0572400e980365a2a5d87f9d.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2c753d70210f4f8f8ba955b753c2d1dc.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="NY"><span>NY</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/1b48ac08790f47ffbf7c3a17714bf8e0.png" alt="Fugle i Paradis">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/67983adc80d947febb2e3e923e0b9135.jpg" alt="Fugle i Paradis"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>400.000</span> kr.</span><span class="card__meta-2 js-card-title">Fugle i Paradis</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-active has-events" data-description="Vind op til 1 mio. kr." data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;,&quot;{24481EE8-F5F5-4795-B564-0EB87FABD311}&quot;]" id="tns1-item1">
                        <a href="/quick/spil/paaskeaeg" data-href="/quick/spil/paaskeaeg" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/bdac87ec733b4a029f3bd31d59bf5b65.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/5346ded2726a415c8674e770725b52a8.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/26f53c3c01414d8e931b66819dcc92f6.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/27000455cec84949a8edd1ceb3bb82e5.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/ab969275d123446f993548e95f2f9efd.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/6f6a16fd37924e49aeb12d334ee00a7f.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/26f53c3c01414d8e931b66819dcc92f6.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}}]}">
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/0acc49d1554642458dd6fcedb0142735.png" alt="Påskeæg">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/68ea4347ac1749899a45e00876edbb55.jpg" alt="Påskeæg"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 50 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>1.000.000</span> kr.</span><span class="card__meta-2 js-card-title">Påskeæg</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-active has-events" data-description="Vind op til 20.000 kr." data-categories="[&quot;bee9d74e97654cfdb5d7bc257a6e3d53&quot;,&quot;1d660e637d9746f6a329f9a4567d1bca&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;,&quot;{24481EE8-F5F5-4795-B564-0EB87FABD311}&quot;]" id="tns1-item2">
                        <a href="/quick/spil/paaskekyllingen" data-href="/quick/spil/paaskekyllingen" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/d42e990ef6874f568941dc2939c40d1e.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/3023a1c030e3432eb13a4e0d23f723e1.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2f442df9b04a4bf3b88f10e40c4e805d.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/081311055f6742829547633e1e1f31ad.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2b52dc92a9814874afefe7e26fd02b27.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2b52dc92a9814874afefe7e26fd02b27.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/2f442df9b04a4bf3b88f10e40c4e805d.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/fec7c6383de04642900e2b24a36ab095.png" alt="Påskekyllingen">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/30516f8f08c242688626efded5960d5e.jpg" alt="Påskekyllingen"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 2 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>20.000</span> kr.</span><span class="card__meta-2 js-card-title">Påskekyllingen</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-active has-events" data-description="Vind op til 500.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" id="tns1-item3">
                        <a href="/quick/spil/feen-i-skoven" data-href="/quick/spil/feen-i-skoven" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/585b2cb01cdc4dec8ae6e92d4e64fa87.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/1d3a7cee5e35483db3131bc95954cfff.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/b1cc8c7e3e414ba2a0cdd126132dd18c.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/32b9ecc683334640814479cea42370e9.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/32b9ecc683334640814479cea42370e9.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/bbcab1dca2dc4aa7b7db1524fdc518f3.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/1a5f80c8d6db44d3b1a34055b1eeae45.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;bounce&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Populær"><span>Populær</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/936a1746b3a14e7982ef4801ed645e38.png" alt="Feen i skoven">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/8d7cfb7de7cb4bba8f0109c10648d7bd.jpg" alt="Feen i skoven"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>500.000</span> kr.</span><span class="card__meta-2 js-card-title">Feen i skoven</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-active has-events" data-description="Vind op til 400.000 kr. " data-categories="[&quot;2dea5aab18ef43068102501f6464499c&quot;,&quot;bee9d74e97654cfdb5d7bc257a6e3d53&quot;]" data-tags="[&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;,&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;]" id="tns1-item4">
                        <a href="/quick/spil/guldaaren" data-href="/quick/spil/guldaaren" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/6a4be5a7c54d4dd699fd6158f58c0872.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/abd74d7d9db34021b2802681b0553ed4.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/6decfed2a01a48039aa200e4b27e13c2.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/6adaf66506d94d018b03ab5562894bf1.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/650ff5a0a19a4ff0b9015dc1d9a01f6d.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/b337cea3c37b4d6d85602b252a274a00.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/61da62036fb747049c2972a48bc4056f.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/b983095dda824af28c98a752975d23aa.png" alt="Guldåren">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/bd1ba9c5e8e7414b976ae4621f0dd6b4.png" alt="Guldåren"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 10 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>400.000</span> kr.</span><span class="card__meta-2 js-card-title">Guldåren</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-active has-events" data-description="Vind op til 500.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" id="tns1-item5">
                        <a href="/quick/spil/fuglevenner-droemmeland" data-href="/quick/spil/fuglevenner-droemmeland" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/35f88ae6beb646b49092477564af9ca1.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/40eacd30a87245ad87fbcfb0af887e3a.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/63109e767fe0454e9a24a33c1385f857.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/3e4b649490fb49328e79d7e16291cebb.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/481aa49758d244e196a5c2bd303d3fe3.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/ae94e383d4114d5b848c0539e086a7a2.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/63109e767fe0454e9a24a33c1385f857.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;boomerang&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/3db7b1085d224716a1b5ce58ecea8fba.png" alt="Fuglevenner Drømmeland">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/04c4ea06d8f14486b9af24e67bb5b20d.jpg" alt="Fuglevenner Drømmeland"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>500.000</span> kr.</span><span class="card__meta-2 js-card-title">Fuglevenner Drømmeland</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-active has-events" data-description="Vind op til 400.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" id="tns1-item6">
                        <a href="/quick/spil/nattens-droemme" data-href="/quick/spil/nattens-droemme" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/b6da9d3d996147b3b31d89339346e704.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/6c356c40db3f4e44a11894f1cf3a3210.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/12cabc8fcf334463b2dc43e87d0f5204.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/281329567b9e494fb96049195fe23215.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/7256eaeb049f4960a31c1163530190e2.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/777449396fea464eac91d735f05a46be.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/1401810976594b758a949e4224cb466e.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/799ae2a13a914307b35a15639dd694ba.png" alt="Nattens drømme">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/5cf8356cc585486a932b5f71b2fb6f14.jpg" alt="Nattens drømme"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>400.000</span> kr.</span><span class="card__meta-2 js-card-title">Nattens drømme</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                     <div class="card card--micro card--no-meta tns-item tns-slide-active has-events" data-description="Spil og vind op til 500.000 kr." data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[&quot;{E20D27E5-8E58-4CE6-B1A0-7C59B3E3A422}&quot;,&quot;{D076DC86-FDB2-40EA-A51A-90FAA0DB9561}&quot;]" id="tns1-item7">
                        <a href="/quick/spil/ellens-eventyr" data-href="/quick/spil/ellens-eventyr" class="card__link" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/0881dbfb0f6441f78f5a4d2464ce02db.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;https://ds-static.dk/dlo/-/media/be66fcbe9b0042a2afdc374280c31aa3.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/9b3f10abe2a64452bf64fa2308433f53.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/421d18df33a84c7ea19e97b4a262f1a8.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/f31f91e4df0b47e2a5c1c826db2f65b0.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/663c73b9c0c042748dc12ddbb463f567.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;https://ds-static.dk/dlo/-/media/203ae8e54ad045be8200186e7b24ffe4.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}}]}">
                           <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                           <div class="card__wrapper">
                              <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://ds-static.dk/dlo/-/media/1fe0f540f4cf4d32b228cc0dd5bba2e2.png" alt="Ellens Eventyr">                 <img class="card-image__background" loading="lazy" src="https://ds-static.dk/dlo/-/media/ada34c3e2fa44ccb9fcc2551d00c27ce.jpg" alt="Ellens Eventyr"></div>
                              <div class="card__content">
                                 <div class="card__labels">
                                    <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <span class="card__counter"></span>
                        <div class="card__meta"><span class="card__meta-1">Vind op til <span>500.000</span> kr.</span><span class="card__meta-2 js-card-title">Ellens Eventyr</span><span class="card__meta-3">Skrabespil</span></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <svg class="hero-deck__controls hero-deck__controls--prev" aria-controls="tns1" tabindex="-1" data-controls="prev" viewBox="0 0 11 19" fill="none">
            <use xlink:href="#chevron-left"></use>
            <path d="M9.51465 18L1.02937 9.51472L9.51465 1.02944" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
         <svg class="hero-deck__controls hero-deck__controls--next" aria-controls="tns1" tabindex="-1" data-controls="next" viewBox="0 0 11 19" fill="none">
            <use xlink:href="#chevron-right"></use>
            <path d="M1 18L9.48528 9.51472L1 1.02944" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
      </div>
      <div class="container hero-deck__hero-texts container hero-deck__hero-texts--mobile">
         <p class="hero-deck__hero-prize-text">Vind op til <span>400.000</span> kr.</p>
         <h3 class="hero-deck__hero-title">Fugle i Paradis</h3>
         <p class="hero-deck__hero-type-text">Skrabespil</p>
      </div>
   </div>
</div>
`;

function RouteComponent() {
  return (
    <div>
      <HeroDeckSlider/>
      {/*<div style={{ margin: '0 auto 20px', backgroundColor: '#2a6156' }} dangerouslySetInnerHTML={{ __html: newHtml }}/>*/}
      <div style={{ margin: '20px auto', backgroundColor: '#2a6156' }} dangerouslySetInnerHTML={{ __html: originalHtml }}/>
    </div>
  )
}
