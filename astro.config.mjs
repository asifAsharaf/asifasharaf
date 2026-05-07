import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import keystatic from '@keystatic/astro'
import react from '@astrojs/react'

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    platformProxy: { enabled: true },
    imageService: 'compile',
  }),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    react(),
    keystatic(),
  ],
})
