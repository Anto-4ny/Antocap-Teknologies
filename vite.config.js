import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import imagemin from 'vite-plugin-imagemin'
import { VitePWA } from 'vite-plugin-pwa'
import compression from 'vite-plugin-compression'
import { generateCriticalCSS } from './critical-css'

export default defineConfig({
  plugins: [
    vue(),
    visualizer({ open: false }),
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 85 },
      svgo: { plugins: [{ removeViewBox: false }] }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'sitemap.xml', 'apple-touch-icon.png'],
      manifest: {
        name: 'Antocap Teknologies',
        short_name: 'AT',
        description: 'website, apps, management systems development, seo services',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn\.antocapteknologies\.com\/.*$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn-assets',
              expiration: { maxEntries: 50, maxAgeSeconds: 86400 }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 604800 }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts',
              expiration: { maxEntries: 10, maxAgeSeconds: 604800 }
            }
          }
        ]
      }
    }),
    compression({ algorithm: 'brotliCompress', threshold: 1024 }),
    compression({ algorithm: 'gzip', threshold: 1024 })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 400,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) return 'vue'
            if (id.includes('axios')) return 'axios'
            if (id.includes('vue-router')) return 'vue-router'
            if (id.includes('vuetify')) return 'vuetify'
            return 'vendor'
          }
        }
      },
      plugins: [
        {
          name: 'generate-critical-css',
          writeBundle: async () => {
            try {
              await generateCriticalCSS()
            } catch (error) {
              console.error('Failed to generate critical CSS:', error)
            }
          }
        }
      ]
    }
  },
  cacheDir: '.vite_cache',
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    },
    middlewareMode: false
  },
  publicDir: 'public',
  assetsInclude: ['robots.txt', 'sitemap.xml'],
  optimizeDeps: {
    include: ['vue', 'axios', 'vue-router', 'swiper']
  }
})