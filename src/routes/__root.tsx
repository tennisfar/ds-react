// @ts-nocheck
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { AppToggle } from '@PATH.MOCK.MOCK/AppToggle/AppToggle.tsx';
import { Navigations } from '@PATH.MOCK.MOCK/Navigations/Navigations.tsx';
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
