/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ===== BRAND COLORS ===== */
      colors: {
        // Primary (Deep Industrial)
        primary: {
          900: '#0B0F14',
          800: '#121820',
          700: '#1B2430',
        },
        // Accent (Electric Blue - AI + precision)
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          muted: 'rgba(59, 130, 246, 0.15)',
        },
        // Neutral scale
        neutral: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
        // Semantic
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      /* ===== TYPOGRAPHY ===== */
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'code': ['0.875rem', { lineHeight: '1.5' }],
      },
      fontWeight: {
        display: '600',
        body: '400',
        caption: '400',
      },
      /* ===== SPACING (4px base scale) ===== */
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      /* ===== GRID ===== */
      maxWidth: {
        'content': '1200px',
        'content-wide': '1400px',
      },
      /* ===== TRANSITIONS ===== */
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
