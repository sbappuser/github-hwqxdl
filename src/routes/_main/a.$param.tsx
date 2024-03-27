import { createFileRoute } from '@tanstack/react-router';
import { ReactElement, Suspense, useRef } from 'react';

export const Route = createFileRoute('/_main/a/$param')({
  component: () => (
    <Suspense>
      <AComponent />
    </Suspense>
  ),
});

function AComponent(): ReactElement {
  const { param } = Route.useParams();
  const idx = useRef(0);
  idx.current++;
  console.log('idx', idx);
  // useSleep(5000);

  const canError = param === 'n1';
  if (canError) {
    throw new Error('this is an error');
  }

  return (
    <>
      <div>Hello /a with param {param}!</div>
    </>
  );
}
