import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/feature-components/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="dsr-routes">
      <Link className="dsr-routes__link dsr-routes__link--back" to="/">
        &larr;&nbsp; Back
      </Link>
      <Link className="dsr-routes__link" to="/feature-components/brand-wheel">
        Brand Wheel
      </Link>
    </div>
  );
}
