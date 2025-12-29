import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Ensure all brand colors are generated
    'bg-coastal',
    'bg-coastal-50',
    'bg-coastal-100',
    'bg-coastal-200',
    'bg-coastal-300',
    'bg-coastal-500',
    'bg-coastal-600',
    'bg-coastal-700',
    'bg-charcoal',
    'bg-slate-gray',
    'bg-sand',
    'bg-cream',
    'text-coastal',
    'text-coastal-50',
    'text-coastal-200',
    'text-coastal-300',
    'text-coastal-700',
    'text-charcoal',
    'text-sand',
    'border-coastal',
    'border-sand',
    'hover:bg-coastal-700',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors from Design System
        coastal: {
          50: '#F0F4F5',
          100: '#D9E5E7',
          200: '#B3CBCE',
          300: '#8DB1B6',
          400: '#75999E',
          500: '#5D878C',
          DEFAULT: '#5D878C',
          600: '#4A6C70',
          700: '#385154',
          800: '#253638',
          900: '#131B1C',
        },
        charcoal: {
          DEFAULT: '#222326',
        },
        'slate-gray': {
          DEFAULT: '#3B3C40',
        },
        sand: {
          DEFAULT: '#BFB195',
        },
        cream: {
          DEFAULT: '#F2F2F0',
        },
      },
    },
  },
  plugins: [],
};

export default config;
