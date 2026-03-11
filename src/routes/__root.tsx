import { createRootRoute, Outlet } from '@tanstack/react-router';
// @ts-ignore
import { AppToggle } from '@Mock/AppToggle/AppToggle.tsx';
// @ts-ignore
import { Navigations } from '@Mock/Navigations/Navigations.tsx';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <AppToggle/>
      <Navigations>
        <Outlet/>
      </Navigations>
      {/*<TanStackRouterDevtools />*/}
    </>
  ),
});
