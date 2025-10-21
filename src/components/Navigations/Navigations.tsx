import { useLocation } from '@tanstack/react-router';
import { WebSpecifics } from '../WebSpecifics/WebSpecifics.tsx';
import { Footer } from '../Footer/Footer.tsx';

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
              <WebSpecifics theme={theme} />
            </div>
          </div>
        </div>
        <div className="page-area">
          <main className={theme === 'klublotto' ? 'theme-klublotto' : theme}>{children}</main>
        </div>
        <Footer theme={theme} />
      </div>
    </>
  );
};
