import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Crimson Pro', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        hero: ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': [
          '2.5rem',
          { lineHeight: '1.15', letterSpacing: '-0.01em' },
        ],
        section: ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'section-mobile': [
          '1.5rem',
          { lineHeight: '1.35', letterSpacing: '0' },
        ],
        project: ['1.17rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        body: ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        small: ['0.875rem', { lineHeight: '1.6', letterSpacing: '0' }],
      },

      colors: {
        page: {
          DEFAULT: '#FAFAFA',
          dark: '#1C1C1E',
        },
        text: {
          DEFAULT: '#1A1A1A',
          dark: '#E5E5E5',
        },
        'text-secondary': {
          DEFAULT: '#737373',
          dark: '#A3A3A3',
        },
        accent: {
          DEFAULT: '#2563EB',
          dark: '#3B82F6',
        },
        'accent-hover': {
          DEFAULT: '#1D4ED8',
          dark: '#60A5FA',
        },
        border: {
          DEFAULT: '#E5E5E5',
          dark: '#262626',
        },
      },

      maxWidth: {
        content: '56rem',
      },

      borderRadius: {
        none: '0',
        sm: '0.25rem',
        lg: 'var(--radius)',
      },
    },
  },
  plugins: [],
}
