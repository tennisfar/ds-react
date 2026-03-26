import { HeroDeckSliderCard } from './HeroDeckSliderCard';
import './HeroDeckSlider.less'

export const HeroDeckSlider = () => {
  const slides = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="quick-games">
      <div className="hero-deck__background" style={{ backgroundImage: 'url(https://ds-static.dk/dlo/-/media/a332a93629bd4664b54c3a87b6b69cfe.jpg)' }}>
        <div className="container hero-deck__hero-container">
          <div className="hero-deck__hero">
            <img className="hero-deck__hero-image" src="https://ds-static.dk/dlo/-/media/34b8cb51cd4d4b86810dabcc8b2a18c7.png" alt={''}/>
            <div className="hero-deck__hero-additional-images">
              <div className="bounce additional-images additional-images--position-1"><img src="https://ds-static.dk/dlo/-/media/79616d2a070240a6b9217672426b4ee5.png" alt={''}/></div>
              <div className="bounce additional-images additional-images--position-2"><img src="https://ds-static.dk/dlo/-/media/8cbeaeeae96b4c8bb337143798a28693.png" alt={''}/></div>
              <div className="bounce additional-images additional-images--position-3"><img src="https://ds-static.dk/dlo/-/media/b2251df3c13d4df3876f6e10993ef7b7.png" alt={''}/></div>
              <div className="bounce additional-images additional-images--position-4"><img src="https://ds-static.dk/dlo/-/media/6daf865d0572400e980365a2a5d87f9d.png" alt={''}/></div>
              <div className="bounce additional-images additional-images--position-5"><img src="https://ds-static.dk/dlo/-/media/2c753d70210f4f8f8ba955b753c2d1dc.png" alt={''}/></div>
            </div>
          </div>
          <div className="hero-deck__hero-texts-wrapper">
            <div className="heading">
              <h1 className="title">Udvalgte spil</h1>
            </div>
            <a className="quick-button js-hero-deck-link" href="/quick/spil/fugle-i-paradis"><span>SPIL NU - 5 Kr.</span></a>
            <div className="hero-deck__hero-texts">
              <p className="hero-deck__hero-prize-text">Vind op til <span>400.000</span> kr.</p>
              <h3 className="hero-deck__hero-title">Fugle i Paradis</h3>
              <p className="hero-deck__hero-type-text">Skrabespil</p>
            </div>
          </div>
        </div>
        <div className="hero-deck-slider  containerXXX hero-deck__slider-containerXXX hero-deck__slider-container--slider-not-initializedXXX">

          <div className="hero-deck-slider__inner  hero-deck__sliderXXX">

            {slides.map((num) => {
              return <HeroDeckSliderCard key={num} num={num}/>;
            })}

          </div>

          <svg className="hero-deck-slider__controls hero-deck-slider__controls--prev   hero-deck__controlsXXX hero-deck__controls--prevXXX" viewBox="0 0 11 19" fill="none">
            <path d="M9.51465 18L1.02937 9.51472L9.51465 1.02944" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg className="hero-deck-slider__controls hero-deck-slider__controls--next  hero-deck__controlsXXX hero-deck__controls--nextXXX" viewBox="0 0 11 19" fill="none">
            <path d="M1 18L9.48528 9.51472L1 1.02944" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="container hero-deck__hero-texts container hero-deck__hero-texts--mobile">
          <p className="hero-deck__hero-prize-text">Vind op til <span>400.000</span> kr.</p>
          <h3 className="hero-deck__hero-title">Fugle i Paradis</h3>
          <p className="hero-deck__hero-type-text">Skrabespil</p>
        </div>
      </div>
    </div>
  );
};

