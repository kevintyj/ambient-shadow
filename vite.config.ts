import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite'
import solidStyled from 'vite-plugin-solid-styled';
export default defineConfig({
  plugins: [
    solid(),
    UnoCSS(),
    solidStyled({
      prefix: 'amb-',
      filter: {
        include: 'src/**/*.tsx',
        exclude: 'node_modules/**/*.{ts,js}',
      },
    }),
  ],
  server: {
    port: 3000,
  },
})
