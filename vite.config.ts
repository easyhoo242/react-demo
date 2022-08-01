import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      /**
       * options
       */
    }),
  ],
  resolve: {
    alias: {
      // @ts-ignore
      '~': join(__dirname, 'src'),
    },
  },
})
