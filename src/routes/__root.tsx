import { createRootRoute, Outlet } from '@tanstack/react-router';
import { WebSpecifics } from '../components/WebSpecifics/WebSpecifics.tsx';
import { AppToggle } from '../components/AppToggle/AppToggle.tsx';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <WebSpecifics />
      <AppToggle />
      <Outlet />
      {/*<TanStackRouterDevtools />*/}
    </>
  ),
});
