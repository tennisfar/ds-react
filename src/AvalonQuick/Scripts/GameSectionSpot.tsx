import { useEffect, useRef } from 'react';

const top10GamesHtml = `
<div class="quick-games">
   <div class="game-section-games container">
      <div class="game-section-games__text container">
         <h1 class="title">Top10 på Quick</h1>
         <p class="text"></p>
      </div>
      
      <div class="game-section-spot-slider">
      
        <div class="game-section-spot-slider__pagination">
          <div class="game-section-spot-slider__pagination-dot"></div>
          <div class="game-section-spot-slider__pagination-dot"></div>
          <div class="game-section-spot-slider__pagination-dot"></div>
        </div>
      
<!--      <ul class="game-section-games__nav"></ul>-->
<!--      <div class="tns-outer" id="tns2-ow">-->
<!--         <div class="tns-nav" aria-label="Carousel Pagination"><button type="button" data-nav="0" aria-controls="tns2" style="" aria-label="Carousel Page 1 (Current Slide)" class="tns-nav-active"></button><button type="button" data-nav="1" tabindex="-1" aria-controls="tns2" style="" aria-label="Carousel Page 2"></button><button type="button" data-nav="2" tabindex="-1" aria-controls="tns2" style="" aria-label="Carousel Page 3"></button><button type="button" data-nav="3" tabindex="-1" aria-controls="tns2" style="" aria-label="Carousel Page 4"></button><button type="button" data-nav="4" tabindex="-1" aria-controls="tns2" style="" aria-label="Carousel Page 5"></button><button type="button" data-nav="5" tabindex="-1" aria-controls="tns2" style="" aria-label="Carousel Page 6"></button><button type="button" data-nav="6" tabindex="-1" aria-controls="tns2" style="display:none" aria-label="Carousel Page 7"></button><button type="button" data-nav="7" tabindex="-1" aria-controls="tns2" style="display:none" aria-label="Carousel Page 8"></button><button type="button" data-nav="8" tabindex="-1" aria-controls="tns2" style="display:none" aria-label="Carousel Page 9"></button><button type="button" data-nav="9" tabindex="-1" aria-controls="tns2" style="display:none" aria-label="Carousel Page 10"></button><button type="button" data-nav="10" tabindex="-1" aria-controls="tns2" style="display:none" aria-label="Carousel Page 11"></button><button type="button" data-nav="11" tabindex="-1" aria-controls="tns2" style="display:none" aria-label="Carousel Page 12"></button></div>-->
<!--         <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 3</span>  of 12</div>-->
<!--         <div id="tns2-mw" class="tns-ovh">-->
<!--            <div class="tns-inner" id="tns2-iw" style="margin: 0px;">-->
<!--               <div class="game-section-games__slider tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns2" style="transform: translate3d(0px, 0px, 0px);">-->
               <div class="game-section-spot-slider__inner">
                  <!-- GameCard dsstjernejagt2025-->
                  <div class="card card--medium" data-description="" data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;1bf9a7a52d6043279630d8b7a7d4622d&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;]" data-tags="[]" id="tns2-item0">
                     <a href="/quick/spil/stjernejagt" data-href="/quick/spil/stjernejagt" class="card__link" data-additional="">
                        <div class="card__wrapper">
                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/fd65e9d53aa6445fa421f4b98daf0f16.png" alt="Stjernejagt">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/fc2845e5ad7a45a0b89b992a5bf3379e.jpg" alt="Stjernejagt"></div>
                           <div class="card__content">
                              <div class="card__labels">
                                 <div class="card__label card__label--price"><span class="price">SPIL NU - 50 kr.</span></div>
                              </div>
                           </div>
                        </div>
                     </a>
                     <span class="card__counter">1</span>
                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>1.000.000</span> kr.</span><span class="card__meta-2 js-card-title">Stjernejagt</span><span class="card__meta-3">Skrabespil</span></div>
                  </div>
                  <!-- /GameCard --><!-- GameCard dsmegamanedslon2023-->
                  <div class="card card--medium" data-description="" data-categories="[&quot;befd1517074b49199f0bccb6bbdc7df2&quot;,&quot;bb209e337639429584876e129bdd9215&quot;]" data-tags="[]" id="tns2-item1">
                     <a href="/quick/spil/mega-maanedsloen" data-href="/quick/spil/mega-maanedsloen" class="card__link" data-additional="">
                        <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                        <div class="card__wrapper">
                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/c69d011121a8495783e025bd9b39b526.png" alt="Mega månedsløn">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/07152ab09c19420cb1591738a87a24d2.png" alt="Mega månedsløn"></div>
                           <div class="card__content">
                              <div class="card__labels">
                                 <div class="card__label card__label--price"><span class="price">SPIL NU - 50 kr.</span></div>
                              </div>
                           </div>
                        </div>
                     </a>
                     <span class="card__counter">2</span>
                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>3.600.000</span> kr.</span><span class="card__meta-2 js-card-title">Mega månedsløn</span><span class="card__meta-3">Skrabespil</span></div>
                  </div>
                  <!-- /GameCard --><!-- GameCard dsdegyldnenoeglerfnc2026-->
                  <div class="card card--medium" data-description="Vind op til 400.000 kr. " data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;,&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;053fea011c954b2aa7c093c54bc70070&quot;]" data-tags="[]" id="tns2-item2">
                     <a href="/quick/spil/de-gyldne-noegler" data-href="/quick/spil/de-gyldne-noegler" class="card__link" data-additional="">
                        <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                        <div class="card__wrapper">
                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/5832265caf5a49c38f960b0b414e5f15.png" alt="De gyldne nøgler">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/22a2cd64205e40a69f53b0b06b1c0a4a.jpg" alt="De gyldne nøgler"></div>
                           <div class="card__content">
                              <div class="card__labels">
                                 <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                              </div>
                           </div>
                        </div>
                     </a>
                     <span class="card__counter">3</span>
                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>1.000.000</span> kr.</span><span class="card__meta-2 js-card-title">De gyldne nøgler</span><span class="card__meta-3">Skrabespil</span></div>
                  </div>
                  <!-- /GameCard --><!-- GameCard dslykkerunden2023-->
                  <div class="card card--medium" data-description="Skrab og vind op til 100.000 kr. " data-categories="[&quot;053fea011c954b2aa7c093c54bc70070&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[]" id="tns2-item3" aria-hidden="true" tabindex="-1">
                     <a href="/quick/spil/lykkerunden" data-href="/quick/spil/lykkerunden" class="card__link" data-additional="">
                        <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                        <div class="card__wrapper">
                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/9c7e2746d11b4a0d9af80bf339707848.png" alt="Lykkerunden">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/b7ed963ca3554455966e48a0de86349b.jpg" alt="Lykkerunden"></div>
                           <div class="card__content">
                              <div class="card__labels">
                                 <div class="card__label card__label--price"><span class="price">SPIL NU - 20 kr.</span></div>
                              </div>
                           </div>
                        </div>
                     </a>
                     <span class="card__counter">4</span>
                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>100.000</span> kr.</span><span class="card__meta-2 js-card-title">Lykkerunden</span><span class="card__meta-3">Skrabespil</span></div>
                  </div>
                  <!-- /GameCard --><!-- GameCard dslykkeposenfnc2025-->
                  <div class="card card--medium" data-description="Vind op til 100.000 kr. " data-categories="[&quot;bee9d74e97654cfdb5d7bc257a6e3d53&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[]" id="tns2-item4" aria-hidden="true" tabindex="-1">
                     <a href="/quick/spil/lykkeposen" data-href="/quick/spil/lykkeposen" class="card__link" data-additional="">
                        <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                        <div class="card__wrapper">
                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/6879c3f507b94da69493e0728e8ac716.png" alt="Lykkeposen">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/7130752a8a6a4816854783797a87060e.png" alt="Lykkeposen"></div>
                           <div class="card__content">
                              <div class="card__labels">
                                 <div class="card__label card__label--price"><span class="price">SPIL NU - 10 kr.</span></div>
                              </div>
                           </div>
                        </div>
                     </a>
                     <span class="card__counter">5</span>
                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>100.000</span> kr.</span><span class="card__meta-2 js-card-title">Lykkeposen</span><span class="card__meta-3">Skrabespil</span></div>
                  </div>
                  <!-- /GameCard --><!-- GameCard dsguldarenfnc2023-->
                  <div class="card card--medium" data-description="Vind op til 400.000 kr. " data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[]" id="tns2-item5" aria-hidden="true" tabindex="-1">
                     <a href="/quick/spil/guldaaren" data-href="/quick/spil/guldaaren" class="card__link" data-additional="">
                        <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                        <div class="card__wrapper">
                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/84ce594bcda1403e9d9ced569d085f4f.png" alt="Guldåren">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/e160e07560b44b43a5c631c0e1f51066.jpg" alt="Guldåren"></div>
                           <div class="card__content">
                              <div class="card__labels">
                                 <div class="card__label card__label--price"><span class="price">SPIL NU - 40 kr.</span></div>
                              </div>
                           </div>
                        </div>
                     </a>
                     <span class="card__counter">6</span>
                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>400.000</span> kr.</span><span class="card__meta-2 js-card-title">Guldåren</span><span class="card__meta-3">Skrabespil</span></div>
                  </div>
                  <!-- /GameCard --><!-- GameCard dsguldbarren2022-->
                  <div class="card card--medium" data-description="Vind op til 60.000. kr./md. i 60 måneder." data-categories="[&quot;b5e6b8cf8962461f81e7f05f691a6be2&quot;]" data-tags="[&quot;{24481EE8-F5F5-4795-B564-0EB87FABD311}&quot;]" id="tns2-item6" aria-hidden="true" tabindex="-1">
                     <a href="/quick/spil/guldbarren" data-href="/quick/spil/guldbarren" class="card__link" data-additional="">
                        <div class="card__wrapper">
                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/63e603dc5916495b936c58a205758842.png" alt="Guldbarren">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/3643379debdf44908e3917e8a728a108.png" alt="Guldbarren"></div>
                           <div class="card__content">
                              <div class="card__labels">
                                 <div class="card__label card__label--price"><span class="price">SPIL NU - 60 kr.</span></div>
                              </div>
                           </div>
                        </div>
                     </a>
                     <span class="card__counter">7</span>
                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>3.600.000</span> kr.</span><span class="card__meta-2 js-card-title">Guldbarren</span><span class="card__meta-3">Skrabespil</span></div>
                  </div>
                  <!-- /GameCard --><!-- GameCard dsbogstavjagtstjerne2019-->
<!--                  <div class="card card&#45;&#45;medium" data-description="Fordobl din gevinst med en stjerne" data-categories="[&quot;053fea011c954b2aa7c093c54bc70070&quot;,&quot;1bf9a7a52d6043279630d8b7a7d4622d&quot;]" data-tags="[]" id="tns2-item7" aria-hidden="true" tabindex="-1">-->
<!--                     <a href="/quick/spil/bogstavjagt-stjerne" data-href="/quick/spil/bogstavjagt-stjerne" class="card__link" data-additional="">-->
<!--                        <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>-->
<!--                        <div class="card__wrapper">-->
<!--                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/5b2e2a86d8294983904d7632dec3b2fa.png" alt="Bogstavjagt stjerne">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/2b75189293104988ae2b6b26caa715ae.jpg" alt="Bogstavjagt stjerne"></div>-->
<!--                           <div class="card__content">-->
<!--                              <div class="card__labels">-->
<!--                                 <div class="card__label card__label&#45;&#45;price"><span class="price">SPIL NU - 30 kr.</span></div>-->
<!--                              </div>-->
<!--                           </div>-->
<!--                        </div>-->
<!--                     </a>-->
<!--                     <span class="card__counter">8</span>-->
<!--                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>600.000</span> kr.</span><span class="card__meta-2 js-card-title">Bogstavjagt stjerne</span><span class="card__meta-3">Skrabespil</span></div>-->
<!--                  </div>-->
                  <!-- /GameCard --><!-- GameCard dsmegaquick2021-->
<!--                  <div class="card card&#45;&#45;medium" data-description="Vind op til 5 millioner kr. " data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;]" data-tags="[]" id="tns2-item8" aria-hidden="true" tabindex="-1">-->
<!--                     <a href="/quick/spil/mega" data-href="/quick/spil/mega" class="card__link" data-additional="">-->
<!--                        <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>-->
<!--                        <div class="card__wrapper">-->
<!--                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/a28365ba38f44671a09a76ee0cd835f7.png" alt="Mega Quick">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/5c08347f7743452c9e5b5a98c89967b3.png" alt="Mega Quick"></div>-->
<!--                           <div class="card__content">-->
<!--                              <div class="card__labels">-->
<!--                                 <div class="card__label card__label&#45;&#45;price"><span class="price">SPIL NU - 50 kr.</span></div>-->
<!--                              </div>-->
<!--                           </div>-->
<!--                        </div>-->
<!--                     </a>-->
<!--                     <span class="card__counter">9</span>-->
<!--                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>5.000.000.</span> kr.</span><span class="card__meta-2 js-card-title">Mega Quick</span><span class="card__meta-3">Skrabespil</span></div>-->
<!--                  </div>-->
                  <!-- /GameCard --><!-- GameCard dsjuvelregn2021-->
<!--                  <div class="card card&#45;&#45;medium" data-description="Vind op til 300.000 kr." data-categories="[&quot;053fea011c954b2aa7c093c54bc70070&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[]" id="tns2-item9" aria-hidden="true" tabindex="-1">-->
<!--                     <a href="/quick/spil/juvelregn" data-href="/quick/spil/juvelregn" class="card__link" data-additional="">-->
<!--                        <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>-->
<!--                        <div class="card__wrapper">-->
<!--                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/4b96ca78ebc347ae869b86fdcaac252a.png" alt="Juvelregn">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/ca5c19fb802643959ec90964e1723177.jpg" alt="Juvelregn"></div>-->
<!--                           <div class="card__content">-->
<!--                              <div class="card__labels">-->
<!--                                 <div class="card__label card__label&#45;&#45;price"><span class="price">SPIL NU - 30 kr.</span></div>-->
<!--                              </div>-->
<!--                           </div>-->
<!--                        </div>-->
<!--                     </a>-->
<!--                     <span class="card__counter">10</span>-->
<!--                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>300.000</span> kr.</span><span class="card__meta-2 js-card-title">Juvelregn</span><span class="card__meta-3">Skrabespil</span></div>-->
<!--                  </div>-->
                  <!-- /GameCard --><!-- GameCard dsfuglevennerfnc2023-->
<!--                  <div class="card card&#45;&#45;medium" data-description="Vind op til 400.000 kr. " data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;]" data-tags="[]" id="tns2-item10" aria-hidden="true" tabindex="-1">-->
<!--                     <a href="/quick/spil/fuglevenner" data-href="/quick/spil/fuglevenner" class="card__link" data-additional="">-->
<!--                        <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>-->
<!--                        <div class="card__wrapper">-->
<!--                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/7d2ed7fbb2b74b03b06a1987a7a7aa01.png" alt="Fuglevenner">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/283bad77136a4545af6a5dac8faa5d7f.png" alt="Fuglevenner"></div>-->
<!--                           <div class="card__content">-->
<!--                              <div class="card__labels">-->
<!--                                 <div class="card__label card__label&#45;&#45;price"><span class="price">SPIL NU - 40 kr.</span></div>-->
<!--                              </div>-->
<!--                           </div>-->
<!--                        </div>-->
<!--                     </a>-->
<!--                     <span class="card__counter">11</span>-->
<!--                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>1.000.000</span> kr.</span><span class="card__meta-2 js-card-title">Fuglevenner</span><span class="card__meta-3">Skrabespil</span></div>-->
<!--                  </div>-->
                  <!-- /GameCard --><!-- GameCard dsgipote2024-->
<!--                  <div class="card card&#45;&#45;medium" data-description="Vind op til 400.000 kr. " data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;]" data-tags="[]" id="tns2-item11" aria-hidden="true" tabindex="-1">-->
<!--                     <a href="/quick/spil/gi-pote" data-href="/quick/spil/gi-pote" class="card__link" data-additional="">-->
<!--                        <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>-->
<!--                        <div class="card__wrapper">-->
<!--                           <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/7d2ed7fbb2b74b03b06a1987a7a7aa01.png" alt="Gi pote">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/283bad77136a4545af6a5dac8faa5d7f.png" alt="Gi pote"></div>-->
<!--                           <div class="card__content">-->
<!--                              <div class="card__labels">-->
<!--                                 <div class="card__label card__label&#45;&#45;price"><span class="price">SPIL NU - 40 kr.</span></div>-->
<!--                              </div>-->
<!--                           </div>-->
<!--                        </div>-->
<!--                     </a>-->
<!--                     <span class="card__counter">12</span>-->
<!--                     <div class="card__meta"><span class="card__meta-1">Vind op til <span>1.000.000</span> kr.</span><span class="card__meta-2 js-card-title">Gi pote</span><span class="card__meta-3">Skrabespil</span></div>-->
<!--                  </div>-->
                  <!-- /GameCard -->
               </div>
<!--            </div>-->
<!--         </div>-->
<!--      </div>-->
<!--      <span class="game-section-games__controls game-section-games__controls&#45;&#45;prev" id="game-section-games__controls&#45;&#45;preva2d267af5deb432cb51101429c8a8a13" role="navigation" aria-label="&lt;&lt;" aria-controls="tns2" tabindex="-1" data-controls="prev" aria-disabled="true"></span><span class="game-section-games__controls game-section-games__controls&#45;&#45;next" id="game-section-games__controls&#45;&#45;nexta2d267af5deb432cb51101429c8a8a13" role="navigation" aria-label="&gt;&gt;" aria-controls="tns2" tabindex="-1" data-controls="next"></span>-->

        <svg class="game-section-spot-slider__controls game-section-spot-slider__controls--prev" width="12" height="12" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.51465 18L1.02937 9.51472L9.51465 1.02944" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        <svg class="game-section-spot-slider__controls game-section-spot-slider__controls--next" width="12" height="12" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 18L9.48528 9.51472L1 1.02944" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    </div>
   </div>
</div>
`;

const town41Html = `
<div class="quick-games">
   <div class="game-section-games container">
      <div class="game-section-games__text container">
         <h1 class="title">Trender lige nu</h1>
         <p class="text"></p>
      </div>
<!--      <ul class="game-section-games__nav"></ul>-->
<!--      <div class="tns-outer" id="tns1-ow">-->
<!--         <div class="tns-nav" aria-label="Carousel Pagination"><button type="button" data-nav="0" aria-controls="tns1" style="" aria-label="Carousel Page 1 (Current Slide)" class="tns-nav-active"></button><button type="button" data-nav="1" tabindex="-1" aria-controls="tns1" style="" aria-label="Carousel Page 2"></button><button type="button" data-nav="2" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 3"></button><button type="button" data-nav="3" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 4"></button><button type="button" data-nav="4" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 5"></button><button type="button" data-nav="5" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 6"></button><button type="button" data-nav="6" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 7"></button><button type="button" data-nav="7" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 8"></button><button type="button" data-nav="8" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 9"></button><button type="button" data-nav="9" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 10"></button><button type="button" data-nav="10" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 11"></button><button type="button" data-nav="11" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 12"></button><button type="button" data-nav="12" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 13"></button><button type="button" data-nav="13" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 14"></button><button type="button" data-nav="14" tabindex="-1" aria-controls="tns1" style="display:none" aria-label="Carousel Page 15"></button></div>-->
<!--         <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 8</span>  of 15</div>-->
<!--         <div id="tns1-mw" class="tns-ovh">-->
<!--            <div class="tns-inner" id="tns1-iw" style="margin: 0px;">-->
      <div class="game-section-spot-slider">
               
        <div class="game-section-spot-slider__pagination">
          <div class="game-section-spot-slider__pagination-dot"></div>
          <div class="game-section-spot-slider__pagination-dot"></div>
          <div class="game-section-spot-slider__pagination-dot"></div>
        </div>
        
        <div class="game-section-spot-slider__inner">
          <!-- GameCard dskanonkuglenfnc2023-->
          <div class="card card--small" data-description="Vind op til 100.000 kr. " data-categories="[&quot;bee9d74e97654cfdb5d7bc257a6e3d53&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[]" id="tns1-item0">
             <a href="/quick/spil/kanonkuglen" data-href="/quick/spil/kanonkuglen" class="card__link" data-additional="">
                <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/223e2c8871fd4d1187bf8351e26e000d.png" alt="Kanonkuglen">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/7aaf1ecf8c894d2ebc8b1f3cc17d09b1.jpg" alt="Kanonkuglen"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 60 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>1.200.000</span> kr.</span><span class="card__meta-2 js-card-title">Kanonkuglen</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dshulenshemmelighederfnc2023-->
          <div class="card card--small" data-description="Vind op til 100.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[]" id="tns1-item1">
             <a href="/quick/spil/hulens-hemmeligheder" data-href="/quick/spil/hulens-hemmeligheder" class="card__link" data-additional="">
                <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/e97ea1c3745741bc8435cdbb3dbcadd5.png" alt="Hulens Hemmeligheder">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/63fb17505e434047822023b3f959cf53.png" alt="Hulens Hemmeligheder"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 5 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>100.000</span> kr.</span><span class="card__meta-2 js-card-title">Hulens Hemmeligheder</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dslykkerunden2023-->
          <div class="card card--small" data-description="Skrab og vind op til 100.000 kr. " data-categories="[&quot;053fea011c954b2aa7c093c54bc70070&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[]" id="tns1-item2">
             <a href="/quick/spil/lykkerunden" data-href="/quick/spil/lykkerunden" class="card__link" data-additional="">
                <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/9c7e2746d11b4a0d9af80bf339707848.png" alt="Lykkerunden">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/b7ed963ca3554455966e48a0de86349b.jpg" alt="Lykkerunden"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 20 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>100.000</span> kr.</span><span class="card__meta-2 js-card-title">Lykkerunden</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dszombiedansfnc2023-->
          <div class="card card--small" data-description="Vind op til 1.200.000 kr. " data-categories="[&quot;befd1517074b49199f0bccb6bbdc7df2&quot;,&quot;bb209e337639429584876e129bdd9215&quot;]" data-tags="[]" id="tns1-item3">
             <a href="/quick/spil/zombie-dans" data-href="/quick/spil/zombie-dans" class="card__link" data-additional="">
                <div class="ribbon ribbon-top-left" alt="Nyhed"><span>Nyhed</span></div>
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/1a64dec2e79f4c53ae7edb1a58066725.png" alt="Zombie dans">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/65138ca6185449cdb4fd656699038a0e.png" alt="Zombie dans"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 60 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>1.200.000</span> kr.</span><span class="card__meta-2 js-card-title">Zombie dans</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dsgrinebideren2019-->
          <div class="card card--small" data-description="Vind op til 250.000 kr." data-categories="[&quot;2dea5aab18ef43068102501f6464499c&quot;,&quot;053fea011c954b2aa7c093c54bc70070&quot;]" data-tags="[]" id="tns1-item4">
             <a href="/quick/spil/grinebideren" data-href="/quick/spil/grinebideren" class="card__link" data-additional="">
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/fd8640eb3f8443628da4bbee76359b56.png" alt="Grinebideren">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/9e6022662e2748308f20d51922b0b28a.jpg" alt="Grinebideren"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 25 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>250.000</span> kr.</span><span class="card__meta-2 js-card-title">Grinebideren</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dsheldigkartoffel2019-->
          <div class="card card--small" data-description="Vind op til 250.000 kr." data-categories="[&quot;2dea5aab18ef43068102501f6464499c&quot;,&quot;053fea011c954b2aa7c093c54bc70070&quot;]" data-tags="[]" id="tns1-item5">
             <a href="/quick/spil/heldig-kartoffel" data-href="/quick/spil/heldig-kartoffel" class="card__link" data-additional="">
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/ac044b4bfa6040178d19896254cc47ff.png" alt="Heldig Kartoffel">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/a7b5b96624a244698152da64587777c1.jpg" alt="Heldig Kartoffel"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 25 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>250.000</span> kr.</span><span class="card__meta-2 js-card-title">Heldig Kartoffel</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dsingenkopaisen2019-->
          <div class="card card--small" data-description="Vind op til 250.000 kr." data-categories="[&quot;2dea5aab18ef43068102501f6464499c&quot;,&quot;053fea011c954b2aa7c093c54bc70070&quot;]" data-tags="[]" id="tns1-item6">
             <a href="/quick/spil/ingen-ko-paa-isen" data-href="/quick/spil/ingen-ko-paa-isen" class="card__link" data-additional="">
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/f6f1113539434c71a8b7c4212b43c86a.png" alt="Ingen ko på isen">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/536a0b7b48e444a4b8f16fe0c38475b1.jpg" alt="Ingen ko på isen"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 25 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>250.000</span> kr.</span><span class="card__meta-2 js-card-title">Ingen ko på isen</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dsmini2024-->
          <div class="card card--small" data-description="Vind op til 100.000 kr." data-categories="[&quot;bee9d74e97654cfdb5d7bc257a6e3d53&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[]" id="tns1-item7">
             <a href="/quick/spil/mini" data-href="/quick/spil/mini" class="card__link" data-additional="">
                <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/20e8fcdb644d47689af152016cac7013.png" alt="Mini Quick">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/b8f7ab165f51480fa2bbc5df29e2ee10.png" alt="Mini Quick"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 10 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>100.000</span> kr.</span><span class="card__meta-2 js-card-title">Mini Quick</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dsfuglevennerfnc2023-->
          <div class="card card--small" data-description="Vind op til 400.000 kr. " data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;]" data-tags="[]" id="tns1-item8" aria-hidden="true" tabindex="-1">
             <a href="/quick/spil/fuglevenner" data-href="/quick/spil/fuglevenner" class="card__link" data-additional="">
                <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/7d2ed7fbb2b74b03b06a1987a7a7aa01.png" alt="Fuglevenner">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/283bad77136a4545af6a5dac8faa5d7f.png" alt="Fuglevenner"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 40 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>1.000.000</span> kr.</span><span class="card__meta-2 js-card-title">Fuglevenner</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dsgaekkebrev2024-->
          <div class="card card--small" data-description="" data-categories="[&quot;2dea5aab18ef43068102501f6464499c&quot;,&quot;053fea011c954b2aa7c093c54bc70070&quot;]" data-tags="[]" id="tns1-item9" aria-hidden="true" tabindex="-1">
             <a href="/quick/spil/gaekkebrev-" data-href="/quick/spil/gaekkebrev-" class="card__link" data-additional="">
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/27d73d7c31ce42f3a3a1304afb0dc58b.png" alt="Gækkebrev ">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/4b0a17f55d7246a2875302287d636379.jpg" alt="Gækkebrev "></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 25 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>500.000</span> kr.</span><span class="card__meta-2 js-card-title">Gækkebrev </span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dsguldarenfnc2023-->
          <div class="card card--small" data-description="Vind op til 400.000 kr. " data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[]" id="tns1-item10" aria-hidden="true" tabindex="-1">
             <a href="/quick/spil/guldaaren" data-href="/quick/spil/guldaaren" class="card__link" data-additional="">
                <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/84ce594bcda1403e9d9ced569d085f4f.png" alt="Guldåren">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/e160e07560b44b43a5c631c0e1f51066.jpg" alt="Guldåren"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 40 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>400.000</span> kr.</span><span class="card__meta-2 js-card-title">Guldåren</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dsgyldnetal2021-->
          <div class="card card--small" data-description="Vind op til 200.000 kr. " data-categories="[&quot;2dea5aab18ef43068102501f6464499c&quot;,&quot;053fea011c954b2aa7c093c54bc70070&quot;]" data-tags="[]" id="tns1-item11" aria-hidden="true" tabindex="-1">
             <a href="/quick/spil/gyldne-tal" data-href="/quick/spil/gyldne-tal" class="card__link" data-additional="">
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/1749c38e29484398a18214744c56d004.png" alt="Gyldne tal">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/f9fe3239be8b4e6c877284a8583a17d1.png" alt="Gyldne tal"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 20 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>200.000</span> kr.</span><span class="card__meta-2 js-card-title">Gyldne tal</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dsmillionquick2021-->
          <div class="card card--small" data-description="Vind op til 10.000. kr./md. i 10 år." data-categories="[&quot;befd1517074b49199f0bccb6bbdc7df2&quot;,&quot;053fea011c954b2aa7c093c54bc70070&quot;]" data-tags="[]" id="tns1-item12" aria-hidden="true" tabindex="-1">
             <a href="/quick/spil/million-quick" data-href="/quick/spil/million-quick" class="card__link" data-additional="">
                <div class="ribbon ribbon-top-left" alt="Populær"><span>Populær</span></div>
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/6792923e88514c78ae6db162ed5febfe.png" alt="Million Quick">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/9d709f0d763c4a13a45006454a449ea9.png" alt="Million Quick"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 30 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>10.000</span> kr./md.</span><span class="card__meta-2 js-card-title">Million Quick</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dsmegaquick2021-->
          <div class="card card--small" data-description="Vind op til 5 millioner kr. " data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;]" data-tags="[]" id="tns1-item13" aria-hidden="true" tabindex="-1">
             <a href="/quick/spil/mega" data-href="/quick/spil/mega" class="card__link" data-additional="">
                <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/a28365ba38f44671a09a76ee0cd835f7.png" alt="Mega Quick">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/5c08347f7743452c9e5b5a98c89967b3.png" alt="Mega Quick"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 50 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>5.000.000.</span> kr.</span><span class="card__meta-2 js-card-title">Mega Quick</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard --><!-- GameCard dsgipote2024-->
          <div class="card card--small" data-description="Vind op til 400.000 kr. " data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;]" data-tags="[]" id="tns1-item14" aria-hidden="true" tabindex="-1">
             <a href="/quick/spil/gi-pote" data-href="/quick/spil/gi-pote" class="card__link" data-additional="">
                <div class="ribbon ribbon-top-left" alt="Top 10"><span>Top 10</span></div>
                <div class="card__wrapper">
                   <div class="card__images"><img class="card-image__overlay" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/7d2ed7fbb2b74b03b06a1987a7a7aa01.png" alt="Gi pote">                 <img class="card-image__background" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/283bad77136a4545af6a5dac8faa5d7f.png" alt="Gi pote"></div>
                   <div class="card__content">
                      <div class="card__labels">
                         <div class="card__label card__label--price"><span class="price">SPIL NU - 40 kr.</span></div>
                      </div>
                   </div>
                </div>
             </a>
             <span class="card__counter"></span>
             <div class="card__meta"><span class="card__meta-1">Vind op til <span>1.000.000</span> kr.</span><span class="card__meta-2 js-card-title">Gi pote</span><span class="card__meta-3">Skrabespil</span></div>
          </div>
          <!-- /GameCard -->
        </div>
        
        <svg class="game-section-spot-slider__controls game-section-spot-slider__controls--prev" width="12" height="12" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.51465 18L1.02937 9.51472L9.51465 1.02944" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        <svg class="game-section-spot-slider__controls game-section-spot-slider__controls--next" width="12" height="12" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 18L9.48528 9.51472L1 1.02944" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
<!--            </div>-->
<!--         </div>-->
<!--      </div>-->

<!--      <span class="game-section-games__controls game-section-games__controls&#45;&#45;prev" id="game-section-games__controls&#45;&#45;prevcb2270c82cd0436594be26ae4dd28c65" role="navigation" aria-label="&lt;&lt;"></span>-->
<!--      <span class="game-section-games__controls game-section-games__controls&#45;&#45;next" id="game-section-games__controls&#45;&#45;nextcb2270c82cd0436594be26ae4dd28c65" role="navigation" aria-label="&gt;&gt;"></span>-->
   </div>
</div>
`;

export const GameSectionSpot = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getSliderTitle = (slider) => slider?.parentElement?.querySelector('h1.title')?.innerText || 'Unknown slider';

  const scroll = (slider, direction) => {
    const slideInner = slider.querySelector('.game-section-spot-slider__inner');

    const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;
    const slide = slideInner.querySelector('.card');

    if (!slide) return;

    const sliderTitle = getSliderTitle(slider);
    // Ensighten.pushGaEvent('campaign_module', direction === 1 ? 'arrow-right' : 'arrow-left', sliderTitle);

    slideInner.scrollBy({
      left: direction * (slide.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    });
  };

  const updateDots = (dots, firstVisible, lastVisible) => {
    dots.forEach((dot) => dot.classList.remove('game-section-spot-slider__pagination-dot--selected'));
    if (firstVisible) {
      dots[0].classList.add('game-section-spot-slider__pagination-dot--selected');
    } else if (lastVisible) {
      dots[2].classList.add('game-section-spot-slider__pagination-dot--selected');
    } else {
      dots[1].classList.add('game-section-spot-slider__pagination-dot--selected');
    }
  };

  const addPagination = (slider, slideButtonPrev?, slideButtonNext?) => {
    const pagination = slider.querySelector('.game-section-spot-slider__pagination');
    if (!pagination) return;

    const dots = pagination.querySelectorAll('.game-section-spot-slider__pagination-dot');
    if (dots.length < 3) return;

    const sliderInner = slider.querySelector('.game-section-spot-slider__inner');
    if (!sliderInner) return;

    const cards = sliderInner.querySelectorAll('.card');
    if (cards.length === 0) return;

    const firstCard = cards[0];
    const lastCard = cards[cards.length - 1];

    let firstVisible = true;
    let lastVisible = false;

    const updateButtonVisibility = () => {
      const allVisible = firstVisible && lastVisible;
      if (slideButtonPrev) (slideButtonPrev as HTMLElement).style.display = allVisible ? 'none' : '';
      if (slideButtonNext) (slideButtonNext as HTMLElement).style.display = allVisible ? 'none' : '';
      (pagination as HTMLElement).style.display = allVisible ? 'none' : '';  // ← add this line
    };

    updateDots(dots, firstVisible, lastVisible);
    updateButtonVisibility();

    const observer = new IntersectionObserver( // eslint-disable-line compat/compat
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === firstCard) firstVisible = entry.isIntersecting;
          else if (entry.target === lastCard) lastVisible = entry.isIntersecting;
        });
        updateDots(dots, firstVisible, lastVisible);
        updateButtonVisibility();
      },
      { root: sliderInner, threshold: 0.8 }
    );

    observer.observe(firstCard);
    observer.observe(lastCard);
  };
  
  const initialize = () => {
    const gameSliders = document.querySelectorAll('.game-section-spot-slider');

    gameSliders.forEach((gameSlider) => {
      const slideButtonPrev = gameSlider.querySelector('.game-section-spot-slider__controls--prev');
      const slideButtonNext = gameSlider.querySelector('.game-section-spot-slider__controls--next');

      addPagination(gameSlider, slideButtonPrev, slideButtonNext);
      // addTrackingToCards(gameSlider);

      slideButtonPrev.addEventListener('click', function () {
        scroll(gameSlider, -1);
      });

      slideButtonNext.addEventListener('click', function () {
        scroll(gameSlider, 1);
      });
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    initialize();
  }, [initialize]);

  return (
    <>
      {/*<div*/}
      {/*  ref={containerRef}*/}
      {/*  style={{ margin: '', backgroundColor: '' }}*/}
      {/*  dangerouslySetInnerHTML={{ __html: town41Html }}*/}
      {/*/>*/}
      <div
        ref={containerRef}
        style={{ margin: '', backgroundColor: '' }}
        dangerouslySetInnerHTML={{ __html: top10GamesHtml }}
      />
    </>
  )
}