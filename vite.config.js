import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base: Nodejs.process.env.NODE_ENV === 'production' ? '/react-gh-pages-sample/':'/',
  plugins: [react()],
})
