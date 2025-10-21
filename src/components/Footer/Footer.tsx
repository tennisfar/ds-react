import { Link } from '@tanstack/react-router';
import './Footer.less';

export const Footer = ({ theme }: { theme: string }) => {
  return (
    <footer className={`global-footer global-footer--${theme}`}>
      <div className="global-footer__inner">
        <Link to="/feature-components" className="global-footer__link">
          Feature Components
        </Link>
        <Link to="/klublotto" className="global-footer__link">
          Klub Lotto
        </Link>
      </div>
    </footer>
  );
};
