import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f0f0f',
        fg: '#f5f5f0',
        accent: '#e8825a',
        muted: '#88887f',
        border: '#1e1e1c',
        surface: '#161614',
      },
      fontFamily: {
        serif: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f5f5f0',
            '--tw-prose-headings': '#f5f5f0',
            '--tw-prose-links': '#e8825a',
            '--tw-prose-bold': '#f5f5f0',
            '--tw-prose-code': '#f5f5f0',
            '--tw-prose-pre-bg': '#161614',
            '--tw-prose-hr': '#1e1e1c',
            '--tw-prose-quotes': '#88887f',
            '--tw-prose-quote-borders': '#1e1e1c',
          },
        },
      },
    },
  },
  plugins: [],
}
