import { Link } from '@tanstack/react-router';
import './Footer.less';

export const Footer = ({ theme }: { theme: string }) => {
  return (
    <footer className={`global-footer global-footer--${theme}`}>
      <div className="global-footer__inner">
        <Link to="/klublotto" className="global-footer__link">
          Klublotto
        </Link>
        <Link to="/quick" className="global-footer__link">
          Quick
        </Link>
      </div>
    </footer>
  );
};
