import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main/b')({
  component: () => <div>Hello /b!</div>,
});
