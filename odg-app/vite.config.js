import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ols-ui source lives one level up from odg-app
const OLS_UI_SRC = path.resolve(__dirname, '../ols-ui/src');

export default defineConfig({
  // Set base to './' for relative asset paths — works for any GitHub Pages subdirectory.
  // If your site is at https://username.github.io/repo-name/, you can also use '/repo-name/'
  base: './',

  plugins: [react()],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  css: {
    preprocessorOptions: {
      scss: {
        // Resolve the ~ols-ui/... import syntax used in odg-app SCSS files.
        importer: [
          function tildeOlsUiImporter(url) {
            if (url.startsWith('~ols-ui/styles')) {
              return {
                file: url.replace('~ols-ui/styles', path.join(OLS_UI_SRC, 'styles')),
              };
            }
            if (url.startsWith('~ols-ui')) {
              return {
                file: url.replace('~ols-ui', OLS_UI_SRC),
              };
            }
            return null;
          },
        ],
      },
    },
  },

  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    // Shim the IRS global that the original webpack DefinePlugin injected
    IRS: JSON.stringify({
      SERVER_PORT: '',
      CLIENT_PORT: '',
      PUBLIC_PATH: './',
      PUBLIC_SRC: '',
      ASSETS_MANIFEST: '',
    }),
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux'],
        },
      },
    },
  },

  server: {
    port: 5173,
  },
});
