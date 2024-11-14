import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

declare module '@remix-run/node' {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    // Enable polling to ensure hot reload works even in environments
    // where file system events may not be detected
    watch: {
      usePolling: true,
      interval: 100, // Adjust the interval as needed (default is 300ms)
    },
    hmr: {
      overlay: true, // Show an overlay on the browser for errors
    },
    open: true, // Automatically open the browser when the server starts
  },
});
