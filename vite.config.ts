import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      devOptions: {
        enabled: true
      },
      includeAssets: [],
      manifest: {
        name: 'FitTrackr',
        theme_color: "#ffffff"
      }
    })
  ],
})
