import { createFileRoute } from '@tanstack/react-router'
import { HeroDeckSliderSpot } from '../../DanskeSpil/Quick/HeroDeckSliderSpot/HeroDeckSliderSpot';

export const Route = createFileRoute('/quick/HeroDeckSliderSpot')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <HeroDeckSliderSpot />
    </div>
  )
}
