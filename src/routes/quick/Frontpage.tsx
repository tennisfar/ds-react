import { createFileRoute } from '@tanstack/react-router'
import { HeroDeckSliderSpot } from '../../DanskeSpil/Quick/HeroDeckSliderSpot/HeroDeckSliderSpot';
import { GameSectionSpot } from '../../DanskeSpil/Quick/GameSectionSpot/GameSectionSpot';

export const Route = createFileRoute('/quick/Frontpage')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      {/*<HeroDeckSliderSpot/>*/}

      <div className={'one-col component-backgroundcolor--quick-with-border-radius'} style={{ backgroundColor: '#7e4787', borderRadius: '4rem', position: 'relative', marginTop: '-6rem' }}>

        <div className="search-spot container">
          <div className="search-spot__toggle js-search-spot-toggle"><img className="" src="https://town41.danskespil.dk/Components/DanskeSpil/Project/Design/Graphics/regions/avalon-quick/search.svg" alt="" importance="low" loading="lazy" lazyload="1"/></div>
          <div className="search-spot__input-container"><img className="magnifying-glass js-search-spot-button" src="https://town41.danskespil.dk/Components/DanskeSpil/Project/Design/Graphics/regions/avalon-quick/magnifying-glass.svg" alt="" importance="low" loading="lazy" lazyload="1"/><input className="search-spot__input js-search-spot-input" type="search" placeholder="Søg i spil" data-search-spot-url="/quick/quick-soeg-side"/></div>
        </div>

        <GameSectionSpot />
        
      </div>
    </div>
  )
}