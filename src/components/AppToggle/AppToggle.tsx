import './app-toggle.less';
import { useUrlParam } from '../../hooks/useUrlParam';
import { useNavigate } from '@tanstack/react-router';

export const AppToggle = () => {
  const hasAppParam = useUrlParam('app');
  const navigate = useNavigate();

  if (!hasAppParam) {
    return null;
  }

  // const handleClick = () => {
  //   // Get current URL and create a URL object
  //   const url = new URL(window.location.href);
  //   // Remove the 'app' parameter
  //   url.searchParams.delete('app');
  //   // Navigate to the new URL without the parameter
  //   navigate({ to: window.location.pathname, search: url.searchParams });
  // };

  const handleClick = () => {
    // Get current URL and create a URL object
    const url = new URL(window.location.href);
    // Remove the 'app' parameter
    url.searchParams.delete('app');

    // Convert URLSearchParams to a plain object
    const searchParamsObj = Object.fromEntries(url.searchParams.entries());

    // Navigate to the new URL without the parameter
    navigate({
      to: window.location.pathname,
      search: searchParamsObj,
    });
  };

  return (
    <div className={'app-toggle'} onClick={handleClick}>
      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-down-icon lucide-chevron-down"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
};
