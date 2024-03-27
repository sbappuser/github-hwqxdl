import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

// Set up a Router instance
export const router = createRouter({
  routeTree,
  defaultErrorComponent: ({ error }) => {
    return (
      <div style={{ color: 'red' }}>An error happened: {String(error)}</div>
    );
  },
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
