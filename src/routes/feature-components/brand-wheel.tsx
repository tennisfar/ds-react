import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/feature-components/brand-wheel')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/featurecomponents/brand-wheel"!</div>;
}
