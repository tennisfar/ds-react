import { createRootRoute, Outlet } from '@tanstack/react-router';
import { AppToggle } from '../components/AppToggle/AppToggle.tsx';
import { Navigations } from '../components/Navigations/Navigations.tsx';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <AppToggle />
      <Navigations>
        <Outlet />
      </Navigations>
      {/*<TanStackRouterDevtools />*/}
    </>
  ),
});
