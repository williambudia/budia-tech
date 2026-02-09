import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  base: '/',

  // Configurações otimizadas para Safari
  build: {
    // Target para suportar Safari 13+ (iOS 13+)
    target: ['es2020', 'safari13'],

    // Otimizações de chunking para melhor performance
    rollupOptions: {
      output: {
        // Separar vendor chunks para melhor cache
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
          ],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          'animation-vendor': ['framer-motion'],
        },

        // Cache busting para assets
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.');
          const ext = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext ?? '')) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff|woff2|eot|ttf|otf/i.test(ext ?? '')) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },

    // Chunk size warnings
    chunkSizeWarningLimit: 1000,

    // Sourcemaps apenas em desenvolvimento
    sourcemap: false,

    // CSS code splitting
    cssCodeSplit: true,
  },

  // Configurações de servidor para desenvolvimento
  server: {
    // HMR configurado para evitar problemas de cache no Safari
    hmr: {
      overlay: true,
    },
    // Headers para evitar cache agressivo do Safari em dev
    headers: {
      'Cache-Control': 'no-store',
    },
  },

  // Preview configurações
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },

  // Otimizações de dependências
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'framer-motion',
      'i18next',
      'react-i18next',
      'wouter',
    ],
    // Force re-optimization
    force: false,
  },
})
