import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import '~/styles/tailwind.css';
import '~/styles/fonts.css';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: '/assets/fonts/', crossOrigin: 'anonymous' },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="font-neue-plak bg-white dark:bg-gray-950">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
