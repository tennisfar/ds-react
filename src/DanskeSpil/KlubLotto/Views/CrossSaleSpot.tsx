export const CrossSaleSpot = ({ type, backgroundColor, backgroundImage, foregroundImage, ctaLabel = 'Køb flere rækker' }: { type: 'eurojackpot' | 'lotto' | 'quick', backgroundColor: string, backgroundImage: string, foregroundImage: string, ctaLabel: string }) => {
  return <div dangerouslySetInnerHTML={{
    __html: `
<a href="/${type}" class="kl-cross-sale-spot kl-cross-sale-spot--${type}" data-tracking-label="cta: /${type}" data-tracking="CrossSaleSpot" style="background-color: ${backgroundColor}; background-image: url(${backgroundImage})">
    <img src="/dlo/Components/DanskeSpil/Domain/Feature.Components/Graphics/BrandLogos/${type}-white.svg" alt="" class="kl-cross-sale-spot__logo">
    
    ${type === 'lotto' ? `
      <div class="kl-cross-sale-spot__content-lotto">
        <div class="kl-cross-sale-spot__content-lotto-poolsize">42</div>
        <div class="kl-cross-sale-spot__content-lotto-prefix">Min.</div>
        <div class="kl-cross-sale-spot__content-lotto-postfix">mio</div>
        <div class="kl-cross-sale-spot__content-lotto-description">l&oslash;rdag</div>
      </div>
    ` : ''}
    
    ${type === 'eurojackpot' ? `
      <div class="kl-cross-sale-spot__content-eurojackpot">
          <div class="kl-cross-sale-spot__content-eurojackpot-prefix">Min.</div>
          <div class="kl-cross-sale-spot__content-eurojackpot-poolsize">142</div>
          <div class="kl-cross-sale-spot__content-eurojackpot-postfix">millioner</div>
          <div class="kl-cross-sale-spot__content-eurojackpot-description">1. pr&aelig;miepuljen</div>
      </div>
    ` : ''}
    
    ${type === 'quick' ? `
      <div class="kl-cross-sale-spot__content-quick">
          <img src="${foregroundImage}" alt="" class="kl-cross-sale-spot__content-quick-image">
      </div>
    ` : ''}
    
    <div class="kl-cross-sale-spot__cta">${ctaLabel}</div>
</a>
`
  }}/>;
};
