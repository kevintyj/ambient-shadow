import { defineConfig } from 'vite'
import path from 'path';
import solid from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite'
export default defineConfig({
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './src/components/shared/ui'),
    },
  },
  plugins: [
    solid(),
    UnoCSS(),
  ],
  server: {
    port: 3000,
  },
})
