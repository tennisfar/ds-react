const html = `
<a href="/eurojackpot" class="kl-cross-sale-spot kl-cross-sale-spot--eurojackpot" data-tracking-label="cta: /eurojackpot" data-tracking="CrossSaleSpot" style="background-color: black; background-image: url()">
    <img src="/dlo/Components/DanskeSpil/Domain/Feature.Components/Graphics/BrandLogos/eurojackpot-white.svg" alt="" class="kl-cross-sale-spot__logo">
    <div class="kl-cross-sale-spot__content-eurojackpot">
        <div class="kl-cross-sale-spot__content-eurojackpot-prefix">Min.</div>
        <div class="kl-cross-sale-spot__content-eurojackpot-poolsize">95</div>
        <div class="kl-cross-sale-spot__content-eurojackpot-postfix">millioner</div>
        <div class="kl-cross-sale-spot__content-eurojackpot-description">1. præmiepuljen</div>
    </div>
    <div class="kl-cross-sale-spot__cta">Køb flere rækker</div>
</a>
`;

export const CrossSaleSpot = () => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
};