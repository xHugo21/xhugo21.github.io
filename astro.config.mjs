import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import { satteri } from '@astrojs/markdown-satteri'
import { pelePlugin } from './src/lib/pele-plugin.mjs'

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: satteri({ mdastPlugins: [pelePlugin] }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
