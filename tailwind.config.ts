import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          primary: '#f5f5f5',
          subtle: '#eaeaea',
          card: '#ffffff',
          dark: '#111112',
          'dark-elevated': '#1e1e1e',
          'dark-surface': '#1e1e1e',
        },
        ink: {
          primary: '#101012',
          secondary: '#4a4a52',
          muted: '#71717a',
          'on-dark': '#f4f4f6',
          'on-dark-muted': '#a1a1aa',
          'on-dark-subtle': '#71717a',
        },
        accent: {
          DEFAULT: '#f9452c',
          hover: '#e03820',
          subtle: 'rgba(249, 69, 44, 0.08)',
          glow: 'rgba(249, 69, 44, 0.28)',
        },
        borderLine: {
          subtle: '#e4e4e7',
          light: '#ececee',
          dark: 'rgba(255, 255, 255, 0.1)',
          'dark-strong': 'rgba(255, 255, 255, 0.18)',
        },
      },
      fontFamily: {
        display: ['"Inter Variable"', '"Inter Variable Placeholder"', 'var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['"Inter Variable"', '"Inter Variable Placeholder"', 'var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        sans: ['"Inter Variable"', '"Inter Variable Placeholder"', 'var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
        dmSans: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      maxWidth: {
        'container-max': '1920px',
        'container-content': '1600px',
        'container-narrow': '980px',
        'container-text': '68ch',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '14px',
        lg: '20px',
        xl: '28px',
      },
      letterSpacing: {
        tightest: '-0.083em',
        tighter: '-0.05em',
        tight: '-0.025em',
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(0, 0, 0, 0.04)',
        card: '0 4px 20px rgba(0, 0, 0, 0.06)',
        elevated: '0 12px 32px rgba(0, 0, 0, 0.09)',
        darkGlow: '0 20px 48px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
