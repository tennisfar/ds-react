const html = `
    <div class="kl-gradient-background">
        <div class="kl-gradient-background__gradient"></div>
    </div>
    <img src="https://ds-static.dk/dlo/-/media/799ae2a13a914307b35a15639dd694ba.png" alt="" class="kl-promotion-banner__image">
    <div class="kl-promotion-banner__cta kl-button kl-button--ds">Spil nu</div>
`;

export const PromotionBanner = () => {
  return <a href={"#"}
            className="kl-promotion-banner"
            data-tracking-label="cta: /LINK-TO-SOMEWHERE"
            data-tracking="PromotionBanner"
            style={{
              backgroundImage: 'url(https://ds-static.dk/dlo/-/media/5cf8356cc585486a932b5f71b2fb6f14.jpg)'
            }}
            dangerouslySetInnerHTML={{ __html: html }}/>;
};
