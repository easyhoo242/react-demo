import { defineConfig, loadEnv, UserConfig, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'
import Unocss from 'unocss/vite'
import { wrapperEnv } from './src/utils'

const root = process.cwd()

const env = loadEnv('development', root)
const viteEnv = wrapperEnv(env)

const { VITE_PORT, VITE_HOST } = viteEnv

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
  server: {
    host: VITE_HOST,
    port: VITE_PORT,
  },
})
