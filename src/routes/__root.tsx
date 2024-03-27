import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

export const Route = createRootRoute({
  component: () => {
    return (
      <div>
        <div>This is the root</div>
        <Suspense fallback={<span>Loading...</span>}>
          <Outlet />
        </Suspense>
      </div>
    );
  },
});
