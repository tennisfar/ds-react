import { createFileRoute } from '@tanstack/react-router'
import { TitleBase } from "@KlubLotto/Scripts/Components/Title/Title";

export const Route = createFileRoute('/klublotto/Title')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TitleBase>Hello world!</TitleBase>
}
