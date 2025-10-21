import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="dsr-routes">
      <Link to="/feature-components" className="dsr-routes__link dsr-routes__link--main">
        Feature Components
      </Link>
      <Link to="/klublotto" className="dsr-routes__link dsr-routes__link--main">
        Klublotto
      </Link>
    </div>
  );
}
