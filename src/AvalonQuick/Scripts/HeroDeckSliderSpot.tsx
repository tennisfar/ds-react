import { useEffect, useRef } from 'react';

const town41QuickGamesHtml = `
<div class="quick-games">
   <div class="hero-deck__background" style="background-image: url('https://town41.danskespil.dk/dlo/-/media/640d8bb6fdbf4fc6b042be887dd5c24f.jpg')">
      <div class="container hero-deck__hero-container">
         <div class="hero-deck__hero">
            <img class="hero-deck__hero-image" src="https://town41.danskespil.dk/dlo/-/media/5eb53a27773140b1b94d3af381e54c8f.png">
            <div class="hero-deck__hero-additional-images">
               <div class="float additional-images additional-images--position-1"><img src="https://town41.danskespil.dk/dlo/-/media/0de64cbf44b646658f36dd545e1b103d.png">                        </div>
               <div class="float additional-images additional-images--position-2"><img src="https://town41.danskespil.dk/dlo/-/media/0de64cbf44b646658f36dd545e1b103d.png">                        </div>
               <div class="float additional-images additional-images--position-3"><img src="https://town41.danskespil.dk/dlo/-/media/0de64cbf44b646658f36dd545e1b103d.png">                        </div>
               <div class="float additional-images additional-images--position-4"><img src="https://town41.danskespil.dk/dlo/-/media/0de64cbf44b646658f36dd545e1b103d.png">                        </div>
               <div class="float additional-images additional-images--position-5"><img src="https://town41.danskespil.dk/dlo/-/media/0de64cbf44b646658f36dd545e1b103d.png">                        </div>
            </div>
         </div>
         <div class="hero-deck__hero-texts-wrapper">
            <div class="heading">
               <h1 class="title">Udvalgte spil</h1>
            </div>
            <a class="quick-button js-hero-deck-link" href="/quick/spil/xo"><span>SPIL NU - 2 Kr.</span></a>
            <div class="hero-deck__hero-texts">
               <p class="hero-deck__hero-prize-text">Vind op til <span>250.000</span> kr.</p>
               <h3 class="hero-deck__hero-title">XO</h3>
               <p class="hero-deck__hero-type-text">Skrabespil</p>
            </div>
         </div>
      </div>
      <div class="hero-deck-slider">
         <div class="hero-deck-slider__inner">
            <!-- HeroDeckSliderCard dshallohviin2023-->
            <div class="hero-deck-slider__slide " data-description="" data-categories="[&quot;2dea5aab18ef43068102501f6464499c&quot;,&quot;053fea011c954b2aa7c093c54bc70070&quot;]" data-tags="[]" data-card-price="SPIL NU - 25 kr." data-meta-1="Vind op til &lt;span&gt;250.000&lt;/span&gt; kr." data-meta-2="Hallohviin" data-meta-3="Skrabespil">
               <a href="/quick/spil/hallohviin" class="hero-deck-slider__slide-card" data-href="/quick/spil/hallohviin" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;/dlo/-/media/640d8bb6fdbf4fc6b042be887dd5c24f.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;/dlo/-/media/5eb53a27773140b1b94d3af381e54c8f.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;/dlo/-/media/0de64cbf44b646658f36dd545e1b103d.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/80dec45fc74d484f851b7476efaf84a1.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/2d966503d5d24cf7bef016a700134a29.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/c46b7ffdf54a4a629b27a284b704792f.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/8d69ef2e4c6842f4a9bfb72034e67335.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}}]}">
                  <div class="hero-deck-slider__ribbon hero-deck-slider__ribbon--top-left" title="Top 10"><span>Top 10</span></div>
                  <img class="hero-deck-slider__slide-card-fg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/cf6b7d15a8e140f1b5cc758dcf8eef92.png" alt="Hallohviin">                 <img class="hero-deck-slider__slide-card-bg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/381ee15d4f944a2788fa10c396a26f7d.jpg" alt="Hallohviin">
               </a>
            </div>
            <!-- /HeroDeckSliderCard --><!-- HeroDeckSliderCard dsxofnc2025-->
            <div class="hero-deck-slider__slide " data-description="Vind op til 250.000 kr. " data-categories="[&quot;bee9d74e97654cfdb5d7bc257a6e3d53&quot;,&quot;51fb7989cfda43d9bae4255dbbde7d8c&quot;]" data-tags="[]" data-card-price="SPIL NU - 2 kr." data-meta-1="Vind op til &lt;span&gt;250.000&lt;/span&gt; kr." data-meta-2="XO" data-meta-3="Skrabespil">
               <a href="/quick/spil/xo" class="hero-deck-slider__slide-card" data-href="/quick/spil/xo" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;/dlo/-/media/373bbb49278446b1a2c301995bfb6a35.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;/dlo/-/media/36d4fba060604b7b8cdd6b53dbed1d9b.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;/dlo/-/media/440e2c6eac4941fe8335051c16631b75.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/c6d6793d24c44e9eb8a0cf4544aabf2f.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/9800274f05fd47bd80573f6247e77c6c.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/7a08388e18704cac97c775f0e0afc999.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/f6174b8fbeac4dd79c9969d8f403b129.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}}]}">
                  <div class="hero-deck-slider__ribbon hero-deck-slider__ribbon--top-left" title="Nyhed"><span>Nyhed</span></div>
                  <img class="hero-deck-slider__slide-card-fg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/1ec5dd2bdbed4de8bb441c9d78099ff0.png" alt="XO">                 <img class="hero-deck-slider__slide-card-bg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/6ba64a6c2779439aafe1730f30a2b3e6.jpg" alt="XO">
               </a>
            </div>
            <!-- /HeroDeckSliderCard --><!-- HeroDeckSliderCard dsdesmaafjerfnc2025-->
            <div class="hero-deck-slider__slide " data-description="Vind op til 400.000 kr. " data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;]" data-tags="[]" data-card-price="SPIL NU - 5 kr." data-meta-1="Vind op til &lt;span&gt;1.000.000&lt;/span&gt; kr." data-meta-2="De små fjer" data-meta-3="Skrabespil">
               <a href="/quick/spil/de-smaa-fjer" class="hero-deck-slider__slide-card" data-href="/quick/spil/de-smaa-fjer" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;/dlo/-/media/9573395c396c42e5b688ce51a30d0d2e.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;/dlo/-/media/8e35828cacd541dd95c16023f9e25040.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;/dlo/-/media/33d0c5270c9d46cdb94f808de0e704c3.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/69c7252c14ab44b7a6ed06e0452c2d2c.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/0a2a3fcf8c9c40a0923b3cfef477dbe1.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/98efff73cfe244cb952f530f44aed956.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/2f773bc5f52e446a8226976484f9a113.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}}]}">
                  <div class="hero-deck-slider__ribbon hero-deck-slider__ribbon--top-left" title="Top 10"><span>Top 10</span></div>
                  <img class="hero-deck-slider__slide-card-fg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/5832265caf5a49c38f960b0b414e5f15.png" alt="De små fjer">                 <img class="hero-deck-slider__slide-card-bg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/22a2cd64205e40a69f53b0b06b1c0a4a.jpg" alt="De små fjer">
               </a>
            </div>
            <!-- /HeroDeckSliderCard --><!-- HeroDeckSliderCard dsstjernejagt2025-->
            <div class="hero-deck-slider__slide " data-description="" data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;1bf9a7a52d6043279630d8b7a7d4622d&quot;,&quot;befd1517074b49199f0bccb6bbdc7df2&quot;]" data-tags="[]" data-card-price="SPIL NU - 50 kr." data-meta-1="Vind op til &lt;span&gt;1.000.000&lt;/span&gt; kr." data-meta-2="Stjernejagt" data-meta-3="Skrabespil"><a href="/quick/spil/stjernejagt" class="hero-deck-slider__slide-card" data-href="/quick/spil/stjernejagt" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;/dlo/-/media/f1d482929a5a440c88a3061a1b6c7db6.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;/dlo/-/media/924b1b910db842f2877ca14bf0e79ab6.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;/dlo/-/media/36cdda2823f940f19e5551dbea4ca49c.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/87908a31f54a475e9d20019983cf11e7.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/7616f08a595845cbb1053bd46de77c80.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/17827d24ee374aca98a5aa4760c75a9e.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/9a27ecdeca18411e840c996ba18495f1.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}}]}"><img class="hero-deck-slider__slide-card-fg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/fd65e9d53aa6445fa421f4b98daf0f16.png" alt="Stjernejagt">                 <img class="hero-deck-slider__slide-card-bg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/fc2845e5ad7a45a0b89b992a5bf3379e.jpg" alt="Stjernejagt"></a></div>
            <!-- /HeroDeckSliderCard --><!-- HeroDeckSliderCard dshalloweenquick2025-->
            <div class="hero-deck-slider__slide " data-description="" data-categories="[&quot;053fea011c954b2aa7c093c54bc70070&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[]" data-card-price="SPIL NU - 50 kr." data-meta-1="Vind op til 1.000.000 kr." data-meta-2="Halloween Quick" data-meta-3="Skrabespil">
               <a href="/quick/spil/halloween-quick" class="hero-deck-slider__slide-card" data-href="/quick/spil/halloween-quick" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;/dlo/-/media/a8a0a5a55cef48ff839d6d6cdee61e5b.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;/dlo/-/media/1e4339d7906d48ce8c3f5227ca3a7a2e.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;/dlo/-/media/33d0c5270c9d46cdb94f808de0e704c3.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/69c7252c14ab44b7a6ed06e0452c2d2c.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/0a2a3fcf8c9c40a0923b3cfef477dbe1.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/98efff73cfe244cb952f530f44aed956.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/2f773bc5f52e446a8226976484f9a113.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}}]}">
                  <div class="hero-deck-slider__ribbon hero-deck-slider__ribbon--top-left" title="Nyhed"><span>Nyhed</span></div>
                  <img class="hero-deck-slider__slide-card-fg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/5384d44e33194c4a9021b8219413d355.png" alt="Halloween Quick">                 <img class="hero-deck-slider__slide-card-bg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/da9400c75e874caf9d1efb930a695225.jpg" alt="Halloween Quick">
               </a>
            </div>
            <!-- /HeroDeckSliderCard --><!-- HeroDeckSliderCard dshulenshemmelighederfnc2023-->
            <div class="hero-deck-slider__slide " data-description="Vind op til 100.000 kr. " data-categories="[&quot;367da42f37334cf99a15b25a3aabe2ba&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[]" data-card-price="SPIL NU - 5 kr." data-meta-1="Vind op til &lt;span&gt;100.000&lt;/span&gt; kr." data-meta-2="Hulens Hemmeligheder" data-meta-3="Skrabespil">
               <a href="/quick/spil/hulens-hemmeligheder" class="hero-deck-slider__slide-card" data-href="/quick/spil/hulens-hemmeligheder" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;/dlo/-/media/bc78889cef674acfa6182b77c443f7e3.png&quot;,&quot;promoForegroundImage&quot;:&quot;/dlo/-/media/4d886cd150aa4ce399049e700b9621f1.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;/&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;/&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;/&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;/&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;/&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}}]}">
                  <div class="hero-deck-slider__ribbon hero-deck-slider__ribbon--top-left" title="Nyhed"><span>Nyhed</span></div>
                  <img class="hero-deck-slider__slide-card-fg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/e97ea1c3745741bc8435cdbb3dbcadd5.png" alt="Hulens Hemmeligheder">                 <img class="hero-deck-slider__slide-card-bg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/63fb17505e434047822023b3f959cf53.png" alt="Hulens Hemmeligheder">
               </a>
            </div>
            <!-- /HeroDeckSliderCard --><!-- HeroDeckSliderCard dszombiedansfnc2023-->
            <div class="hero-deck-slider__slide " data-description="Vind op til 1.200.000 kr. " data-categories="[&quot;befd1517074b49199f0bccb6bbdc7df2&quot;,&quot;bb209e337639429584876e129bdd9215&quot;]" data-tags="[]" data-card-price="SPIL NU - 60 kr." data-meta-1="Vind op til &lt;span&gt;1.200.000&lt;/span&gt; kr." data-meta-2="Zombie dans" data-meta-3="Skrabespil">
               <a href="/quick/spil/zombie-dans" class="hero-deck-slider__slide-card" data-href="/quick/spil/zombie-dans" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;/dlo/-/media/8715f0fa25934cf581763fc3fb6fef51.png&quot;,&quot;promoForegroundImage&quot;:&quot;/dlo/-/media/1a64dec2e79f4c53ae7edb1a58066725.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;/&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;/&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;/&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;/&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}},{&quot;imageUrl&quot;:&quot;/&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;circle-around&quot;}}]}">
                  <div class="hero-deck-slider__ribbon hero-deck-slider__ribbon--top-left" title="Nyhed"><span>Nyhed</span></div>
                  <img class="hero-deck-slider__slide-card-fg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/1a64dec2e79f4c53ae7edb1a58066725.png" alt="Zombie dans">                 <img class="hero-deck-slider__slide-card-bg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/65138ca6185449cdb4fd656699038a0e.png" alt="Zombie dans">
               </a>
            </div>
            <!-- /HeroDeckSliderCard --><!-- HeroDeckSliderCard dsalfensskatte2020-->
            <div class="hero-deck-slider__slide " data-description="" data-categories="[&quot;2dea5aab18ef43068102501f6464499c&quot;,&quot;bee9d74e97654cfdb5d7bc257a6e3d53&quot;]" data-tags="[]" data-card-price="SPIL NU - 10 kr." data-meta-1="Vind op til &lt;span&gt;100.000&lt;/span&gt; kr." data-meta-2="Alfens skatte" data-meta-3="Skrabespil">
               <a href="/quick/spil/alfens-skatte" class="hero-deck-slider__slide-card" data-href="/quick/spil/alfens-skatte" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;/dlo/-/media/7534956a8111457cafacfe5202f4e2e8.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;/dlo/-/media/8787de6cd56e42e08cf3b7aecdac388a.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;/dlo/-/media/e7a6cf9da67842d7bd4df89c7cd5af63.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:null},{&quot;imageUrl&quot;:&quot;/dlo/-/media/4bbd271008b14bdc9a7d94f90846d048.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:null},{&quot;imageUrl&quot;:&quot;/dlo/-/media/0f197f934d1648a9835291909b9aea69.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:null},{&quot;imageUrl&quot;:&quot;/dlo/-/media/af7e1321fa8f4873924e21255f79eb2e.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:null},{&quot;imageUrl&quot;:&quot;/dlo/-/media/50c76fd79c934930b48c3946b073ae54.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:null}]}">
                  <div class="hero-deck-slider__ribbon hero-deck-slider__ribbon--top-left" title="Top 10"><span>Top 10</span></div>
                  <img class="hero-deck-slider__slide-card-fg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/4091f339e67a4a08b28fe271c4962743.png" alt="Alfens skatte">                 <img class="hero-deck-slider__slide-card-bg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/3f0f5b29dbb94f9eba4e6973987df3f7.jpg" alt="Alfens skatte">
               </a>
            </div>
            <!-- /HeroDeckSliderCard --><!-- HeroDeckSliderCard dsspladaskfnc2023-->
            <div class="hero-deck-slider__slide " data-description="Vind op til 250.000 kr. " data-categories="[&quot;bb209e337639429584876e129bdd9215&quot;,&quot;2dea5aab18ef43068102501f6464499c&quot;]" data-tags="[]" data-card-price="SPIL NU - 50 kr." data-meta-1="Vind op til &lt;span&gt;250.000&lt;/span&gt; kr." data-meta-2="Spladask" data-meta-3="Skrabespil"><a href="/quick/spil/spladask" class="hero-deck-slider__slide-card" data-href="/quick/spil/spladask" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;/dlo/-/media/755601bcf4f3421d87bd998d6406a1e3.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;/dlo/-/media/f709f8bef2df46169e6223a20207f722.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;/dlo/-/media/95762a39f11b4d0f9d9b973a385904ab.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/a9d8f093fa2644a4923b21041b377359.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/80359a2fe7f9436982f47bbf9dfd4e21.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/d03210d4b5f14322bc302cf821992433.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/9d05315cad194c8ab3fabdef82da6bcd.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;float&quot;}}]}"><img class="hero-deck-slider__slide-card-fg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/a3170fc36bcd4366b4ff89e3e0bce758.png" alt="Spladask">                 <img class="hero-deck-slider__slide-card-bg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/f33ed806dd9a4865b1350783958d1f50.jpg" alt="Spladask"></a></div>
            <!-- /HeroDeckSliderCard --><!-- HeroDeckSliderCard dsmegamanedslon2023-->
            <div class="hero-deck-slider__slide " data-description="" data-categories="[&quot;befd1517074b49199f0bccb6bbdc7df2&quot;,&quot;bb209e337639429584876e129bdd9215&quot;]" data-tags="[]" data-card-price="SPIL NU - 50 kr." data-meta-1="Vind op til &lt;span&gt;3.600.000&lt;/span&gt; kr." data-meta-2="Mega månedsløn" data-meta-3="Skrabespil">
               <a href="/quick/spil/mega-maanedsloen" class="hero-deck-slider__slide-card" data-href="/quick/spil/mega-maanedsloen" data-additional="{&quot;gameId&quot;:null,&quot;promoBackgroundImage&quot;:&quot;/dlo/-/media/7d84409bb9f04043854d2673e584a21a.jpg&quot;,&quot;promoForegroundImage&quot;:&quot;/dlo/-/media/5b42740202244c8aaec98e760cba726e.png&quot;,&quot;additionalImages&quot;:[{&quot;imageUrl&quot;:&quot;/dlo/-/media/33d0c5270c9d46cdb94f808de0e704c3.png&quot;,&quot;position&quot;:1,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/69c7252c14ab44b7a6ed06e0452c2d2c.png&quot;,&quot;position&quot;:2,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/0a2a3fcf8c9c40a0923b3cfef477dbe1.png&quot;,&quot;position&quot;:3,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/98efff73cfe244cb952f530f44aed956.png&quot;,&quot;position&quot;:4,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}},{&quot;imageUrl&quot;:&quot;/dlo/-/media/2f773bc5f52e446a8226976484f9a113.png&quot;,&quot;position&quot;:5,&quot;svgContent&quot;:null,&quot;quickStylingClass&quot;:{&quot;classname&quot;:&quot;blink-with-pause&quot;}}]}">
                  <div class="hero-deck-slider__ribbon hero-deck-slider__ribbon--top-left" title="Top 10"><span>Top 10</span></div>
                  <img class="hero-deck-slider__slide-card-fg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/c69d011121a8495783e025bd9b39b526.png" alt="Mega månedsløn">                 <img class="hero-deck-slider__slide-card-bg" loading="lazy" src="https://town41.danskespil.dk/dlo/-/media/07152ab09c19420cb1591738a87a24d2.png" alt="Mega månedsløn">
               </a>
            </div>
            <!-- /HeroDeckSliderCard -->
         </div>
         <svg class="hero-deck-slider__controls hero-deck-slider__controls--prev">
            <svg width="35" height="35" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.51465 18L1.02937 9.51472L9.51465 1.02944" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </svg>
         <svg class="hero-deck-slider__controls hero-deck-slider__controls--next">
            <svg width="35" height="35" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 18L9.48528 9.51472L1 1.02944" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </svg>
      </div>
      <div class="container hero-deck__hero-texts container hero-deck__hero-texts--mobile">
         <p class="hero-deck__hero-prize-text">Vind op til <span>250.000</span> kr.</p>
         <h3 class="hero-deck__hero-title">XO</h3>
         <p class="hero-deck__hero-type-text">Skrabespil</p>
      </div>
   </div>
</div>
`

export const HeroDeckSliderSpot = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const BASE_URL = 'https://town41.danskespil.dk';
    const prefixUrl = (url: string) => url?.startsWith('/') ? `${BASE_URL}${url}` : (url ?? '');

    const heroDeckHero = document.querySelector('.hero-deck__hero');
    const heroDeckSlider = document.querySelector('.hero-deck-slider');

    if (!heroDeckHero || !heroDeckSlider) {
      return;
    }

    // Initiate Hero fields that should be updated
    const heroBackgroundImage = document.querySelector('.hero-deck__background');
    const heroForegroundImage = heroDeckHero.querySelector('.hero-deck__hero-image');
    const price = document.querySelector('.js-hero-deck-link span');
    const metatext1 = document.querySelector('.hero-deck__hero-prize-text');
    const metatext2 = document.querySelector('.hero-deck__hero-title');
    const metatext3 = document.querySelector('.hero-deck__hero-type-text');
    const metatext1Mobile = document.querySelector('.hero-deck__hero-texts--mobile .hero-deck__hero-prize-text');
    const metatext2Mobile = document.querySelector('.hero-deck__hero-texts--mobile .hero-deck__hero-title');
    const metatext3Mobile = document.querySelector('.hero-deck__hero-texts--mobile .hero-deck__hero-type-text');
    const link = document.querySelector('.js-hero-deck-link');
    const slideButtonPrev = heroDeckSlider.querySelector('.hero-deck-slider__controls--prev');
    const slideButtonNext = heroDeckSlider.querySelector('.hero-deck-slider__controls--next');
    let touchStartX = 0;
    let touchStartY = 0;

    slideButtonPrev.addEventListener('click', function () {
      scroll(-1);
    });

    slideButtonNext.addEventListener('click', function () {
      scroll(1);
    });

    const setActiveSlide = (slide) => {
      price.innerHTML = slide.dataset['cardPrice'];
      metatext1.innerHTML = slide.dataset['meta-1'];
      metatext1Mobile.innerHTML = slide.dataset['meta-1'];
      metatext2.innerHTML = slide.dataset['meta-2'];
      metatext2Mobile.innerHTML = slide.dataset['meta-2'];
      metatext3.innerHTML = slide.dataset['meta-3'];
      metatext3Mobile.innerHTML = slide.dataset['meta-3'];
      animateMetaTexts();

      const cardLink = slide.querySelector('a.hero-deck-slider__slide-card')?.getAttribute('data-href');
      link.setAttribute('href', (cardLink));
      link.classList.add('quick-button--animate');

      window.setTimeout(() => {
        link.classList.remove('quick-button--animate');
      }, 4000);

      const additionalImageData = slide.querySelector('a.hero-deck-slider__slide-card')?.getAttribute('data-additional');

      if (additionalImageData) {
        const additionalDataElement = JSON.parse(additionalImageData);
        if (additionalDataElement) {
          document.querySelectorAll('.hero-deck__hero-additional-images>.additional-images').forEach((element) => element.classList.remove('hidden'));
          renderAdditionalImages(additionalDataElement);
          heroForegroundImage.setAttribute('src', prefixUrl(additionalDataElement.promoForegroundImage ?? ''));
          heroBackgroundImage.setAttribute('style', `background-image: url(${prefixUrl(additionalDataElement.promoBackgroundImage ?? '')});`);
        } else {
          document.querySelectorAll('.hero-deck__hero-additional-images>.additional-images').forEach((element) => element.classList.add('hidden'));
        }
      }

      heroDeckSlider.querySelectorAll('.hero-deck-slider__slide').forEach(($card) => {
        $card.classList.remove('hero-deck-slider__slide--active');
      });
      slide.classList.add('hero-deck-slider__slide--active');
    };

    const scroll = (direction) => {
      const slideInner = heroDeckSlider.querySelector('.hero-deck-slider__inner');

      const gap = parseFloat(getComputedStyle(heroDeckSlider).columnGap) || 0;
      const slide = slideInner.querySelector('.hero-deck-slider__slide');

      if (!slide) return;

      slideInner.scrollBy({
        left: direction * (slide.getBoundingClientRect().width + gap),
        behavior: 'smooth',
      });
    };

    const cardClicked = (e) => {
      e.preventDefault();
      const slide = e.target.closest('.hero-deck-slider__slide');
      setActiveSlide(slide);
    };

    const handleCta = ((ev) => {
      return;
      
      // ev.preventDefault();
      // const cta = ev.currentTarget;
      // const href = cta.getAttribute('href');
      // const label = metatext2?.innerText || href || cta.innerText;

      // Ensighten.pushGaEventOnPageRedirect('campaign_module', 'top_spot_click', label);

      // setTimeout(() => {
      //   location.href = href;
      // }, 100);
    });

    const animateMetaTexts = () => {
      metatext1.classList.add('animating');
      metatext2.classList.add('animating');
      metatext3.classList.add('animating');
      metatext1Mobile.classList.add('animating');
      metatext2Mobile.classList.add('animating');
      metatext3Mobile.classList.add('animating');

      window.setTimeout(() => {
        metatext1.classList.remove('animating');
        metatext2.classList.remove('animating');
        metatext3.classList.remove('animating');
        metatext1Mobile.classList.remove('animating');
        metatext2Mobile.classList.remove('animating');
        metatext3Mobile.classList.remove('animating');
      }, 500);
    };

    const renderAdditionalImages = ({ additionalImages }) => {
      const additionalImagesContainer = container.querySelector('.hero-deck__hero-additional-images');
      if (!additionalImages || !additionalImagesContainer) return;

      additionalImagesContainer.innerHTML = additionalImages.map((img) => {
        const className = `additional-images additional-images--position-${img.position} ${img.quickStylingClass?.classname ?? ''}`;
        const inner = img.svgContent
          ? img.svgContent
          : `<img src="${prefixUrl(img.imageUrl)}" />`;
        return `<div class="${className}">${inner}</div>`;
      }).join('');
    };

    
    // const renderAdditionalImages = ({ additionalImages }) => {
    //   if (additionalImages) {
    //     const additionalImageHtml = [
    //       additionalImages.map((additionalImage) => {
    //         return m('div', { class: `additional-images additional-images--position-${additionalImage.position} ${additionalImage.quickStylingClass?.classname ?? ''}` },
    //           additionalImage?.svgContent ?
    //             m.trust(additionalImage.svgContent) :
    //             m('img', { src: additionalImage.imageUrl }));
    //       })
    //     ];
    //     m.render(document.querySelector('.hero-deck__hero-additional-images'), additionalImageHtml);
    //   }
    // };

    const observeSlides = () => {
      const slideElements = Array.from(heroDeckSlider.querySelectorAll('.hero-deck-slider__slide'));

      const observer = new IntersectionObserver( // eslint-disable-line compat/compat
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              if (window.matchMedia('(max-width: 767px)').matches) {
                setActiveSlide(entry.target);
              }
            }
          }
        },
        {
          root: heroDeckSlider,
          rootMargin: '0px -45% 0px -45%', // narrows observation to ~10% center zone
          threshold: 0,
        });

      slideElements.forEach((slide) => observer.observe(slide));
    };

    const addCardListeners = (card) => {
      card.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      card.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        // Only treat as a "tap" if finger moved less than 10px
        if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
          e.preventDefault();
          const slide = e.target.closest('.hero-deck-slider__slide');
          if (slide) setActiveSlide(slide);
        }
      });

      // Keep the click listener for desktop
      card.addEventListener('click', cardClicked);
    };

    const initialize = () => {
      observeSlides();
      link?.addEventListener('click', handleCta);
      heroDeckSlider.querySelectorAll('.hero-deck-slider__slide-card').forEach(addCardListeners);
    };

    initialize();
    
    // Cleanup: remove event listeners on unmount
    return () => {
      link?.removeEventListener('click', handleCta);
      // slideButtonPrev?.removeEventListener('click', /* handler */);
      // slideButtonNext?.removeEventListener('click', /* handler */);
      heroDeckSlider.querySelectorAll('.hero-deck-slider__slide-card').forEach((card) => {
        card.removeEventListener('click', cardClicked);
      });
    };
  }, []); // empty deps = run once after first render

  return (
    <div
      ref={containerRef}
      style={{ margin: '0px auto', backgroundColor: '#2a6156' }}
      dangerouslySetInnerHTML={{ __html: town41QuickGamesHtml }}
    />
  )
}