import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'text-accent',
    'text-olive',
    'text-rose',
    'text-mustard',
    'text-cobalt',
    'bg-accent',
    'bg-olive',
    'bg-rose',
    'bg-mustard',
    'bg-cobalt',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--rgb-bg) / <alpha-value>)',
        fg: 'rgb(var(--rgb-fg) / <alpha-value>)',
        accent: 'rgb(var(--rgb-accent) / <alpha-value>)',
        olive: 'rgb(var(--rgb-olive) / <alpha-value>)',
        rose: 'rgb(var(--rgb-rose) / <alpha-value>)',
        mustard: 'rgb(var(--rgb-mustard) / <alpha-value>)',
        cobalt: 'rgb(var(--rgb-cobalt) / <alpha-value>)',
        muted: 'rgb(var(--rgb-muted) / <alpha-value>)',
        border: 'rgb(var(--rgb-border) / <alpha-value>)',
        surface: 'rgb(var(--rgb-surface) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
