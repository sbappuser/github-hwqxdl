import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

export const Route = createFileRoute('/_main')({
  component: () => (
    <div>
      <div>
        <b>Navigation:</b>
        <ul>
          <li>
            <Link to="/a/$param" params={{ param: 'n1' }}>
              a param=n1 (error trigger)
            </Link>
          </li>
          <li>
            <Link to="/a/$param" params={{ param: 'n2' }}>
              a param=n2
            </Link>
          </li>
          <li>
            <Link to="/b">b</Link>
          </li>
        </ul>
      </div>
      <div>
        <b>Content:</b>
        <Suspense fallback={<span>Loading...</span>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  ),
});
