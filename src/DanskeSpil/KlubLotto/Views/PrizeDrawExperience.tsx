export const PrizeDrawExperience = () => {
  const html = `
<div data-component="PrizeDrawExperience" class="group w-full" data-tracking="PrizeDrawExperience">
  <div class="kl-prize-draw-experience">
    <a href="/klublotto/maanedens-konkurrence" class="kl-prize-draw-experience__card" data-tracking="PrizeDrawExperience" data-tracking-label="gameEntry_click: /klublotto/maanedens-konkurrence" data-tracking-category="klub_lotto">
      <div class="kl-prize-draw-experience__top">
        <div class="kl-prize-draw-experience__welcome">Velkommen tilbage</div>
        <div class="kl-prize-draw-experience__top-icon" aria-hidden="true"></div>
      </div>

      <div class="kl-prize-draw-experience__body">
        <div class="kl-prize-draw-experience__headline-row">
          <img class="kl-prize-draw-experience__chest" src="https://www.figma.com/api/mcp/asset/d3d3c114-52e1-48a6-92cd-ba6fff02b5e9" alt="">

          <div class="kl-prize-draw-experience__headline">
            Du er med i månedens<br>
            store konkurrence<br>
            om 200.000 kr.
          </div>
        </div>

        <div class="kl-prize-draw-experience__winner-text">
          Stort tillykke til sidste<br>
          måneds vinder fra<br>
          Frederikshavn.
        </div>

        <div class="kl-prize-draw-experience__countdown-title">Vi finder vinderen om:</div>

        <div class="kl-prize-draw-experience__countdown">
          <div class="kl-prize-draw-experience__countdown-unit">
            <div class="kl-prize-draw-experience__countdown-value">28</div>
            <div class="kl-prize-draw-experience__countdown-label">Dage</div>
          </div>
          <div class="kl-prize-draw-experience__countdown-unit">
            <div class="kl-prize-draw-experience__countdown-value">16</div>
            <div class="kl-prize-draw-experience__countdown-label">Timer</div>
          </div>
          <div class="kl-prize-draw-experience__countdown-unit">
            <div class="kl-prize-draw-experience__countdown-value">23</div>
            <div class="kl-prize-draw-experience__countdown-label">Min.</div>
          </div>
          <div class="kl-prize-draw-experience__countdown-unit">
            <div class="kl-prize-draw-experience__countdown-value">50</div>
            <div class="kl-prize-draw-experience__countdown-label">Sek.</div>
          </div>
        </div>

        <div class="kl-prize-draw-experience__cta">
          <div class="kl-button kl-button--primary-inverted">LÆS MERE</div>
        </div>
      </div>
    </a>

    <div class="kl-prize-draw-experience__disclaimer">
      Besøg Klub Lotto inden sidste dag i måneden, så er du med i lodtrækningen om kr. 200.000. Øvrige vilkår gælder. <a href="#vilkår">Læs mere nedenfor</a>.
    </div>
  </div>
</div>
`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
