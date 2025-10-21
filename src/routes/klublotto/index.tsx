import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/klublotto/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="dsr-routes">
      <Link className="dsr-routes__link dsr-routes__link--back" to="/">
        &larr;&nbsp; Back
      </Link>
      <Link className="dsr-routes__link" to="/klublotto/countdown">
        Countdown
      </Link>
      <Link className="dsr-routes__link" to="/klublotto/LottoRowClaim-Receipt">
        LottoRowClaim Receipt
      </Link>
      <Link className="dsr-routes__link" to="/klublotto/NewsSlider">
        NewsSlider
      </Link>
      <Link className="dsr-routes__link" to="/klublotto/popups">
        Popups
      </Link>
      <Link className="dsr-routes__link" to="/klublotto/starstep">
        Starstep
      </Link>
      <Link className="dsr-routes__link" to="/klublotto/title-base">
        Title Base
      </Link>
    </div>
  );
}
