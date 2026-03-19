// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router'
import { MyRewards } from '@PATH.DS.KLUBLOTTO/Scripts/Components/ContestOverview/MyRewards';

export const Route = createFileRoute('/klublotto/MyRewards')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MyRewards/>
}
