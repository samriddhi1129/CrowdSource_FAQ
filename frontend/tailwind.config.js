// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Vicharanshala palette — grounded in IIT Ropar's campus on the Satluj,
        // beneath the Shivalik hills, with an Indus-Valley-inspired stone gate.
        // "primary" = Terracotta (the fired-clay gate pillars)
        primary: {
          50:  '#fbf1ea',
          100: '#f5dfcf',
          200: '#eac0a0',
          300: '#de9e71',
          400: '#d07c4c',
          500: '#c1592f',
          600: '#a6472a',
          700: '#863824',
          800: '#692b1c',
          900: '#4a1e13',
          950: '#2e120b',
        },
        ropar: {
          navy:   '#0b1e20', // Ink — river at dusk
          blue:   '#123b3b', // deep teal-ink mid tone
          accent: '#2a8c82', // Sutlej — the river
          gold:   '#e0a63a', // Saffron — scholarly gold
          teal:   '#2a8c82', // alias of Sutlej, kept for existing usages
        },
        sand: {
          50:  '#fefcf8',
          100: '#f8f2e4',
          200: '#f1e4c9',
          300: '#e4d3a4',
          400: '#d4bb78',
        },
        shivalik: {
          400: '#8fa39c',
          500: '#5b6b63',
          600: '#465049',
        },
        glass: {
          light: 'rgba(255,252,245,0.08)',
          dark:  'rgba(11,30,32,0.35)',
          border: 'rgba(42,140,130,0.14)',
        },
      },
      fontFamily: {
        sans:    ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Manrope', 'serif'],
        mono:    ['"IBM Plex Mono"', 'Fira Code', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in':       'fadeIn 0.4s ease-out',
        'slide-up':      'slideUp 0.4s ease-out',
        'slide-down':    'slideDown 0.3s ease-out',
        'scale-in':      'scaleIn 0.3s ease-out',
        'pulse-slow':    'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'glow':          'glow 2s ease-in-out infinite alternate',
        'float':         'float 6s ease-in-out infinite',
        'gradient-x':    'gradientX 4s ease infinite',
      },
      keyframes: {
        fadeIn:    { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp:   { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideDown: { from: { opacity: 0, transform: 'translateY(-12px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        scaleIn:   { from: { opacity: 0, transform: 'scale(0.95)' }, to: { opacity: 1, transform: 'scale(1)' } },
        glow:      { from: { boxShadow: '0 0 20px rgba(193,89,47,0.3)' }, to: { boxShadow: '0 0 40px rgba(193,89,47,0.7)' } },
        float:     { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        gradientX: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      },
      boxShadow: {
        'glass':    '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glow-sm':  '0 0 15px rgba(193,89,47,0.4)',
        'glow-md':  '0 0 30px rgba(193,89,47,0.5)',
        'glow-lg':  '0 0 60px rgba(42,140,130,0.35)',
        'card':     '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
        'card-dark':'0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern':    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c1592f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
