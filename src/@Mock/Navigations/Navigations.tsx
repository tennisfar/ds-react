// @ts-nocheck
import { useLocation } from '@tanstack/react-router';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

const getThemeByRoute = (pathname: string) => {
  if (pathname.startsWith('/klublotto')) return 'klublotto';
  if (pathname.startsWith('/feature-components')) return 'feature-components';
  return 'danskespil';
};

export const Navigations = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const theme = getThemeByRoute(location.pathname);

  return (
    <>
      <div id="wrapper" className={'page'}>
        <div className="page-box">
          <div className="outer-container">
            <div className="container">
              <Header theme={theme}/>
            </div>
          </div>
        </div>
        <div className="page-area" style={{ '--page-width': '112rem' }}>
          <main className={theme === 'klublotto' ? 'theme-klublotto' : theme}>{children}</main>
        </div>
        <Footer theme={theme}/>
      </div>
    </>
  );
};
