/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        elyndor: {
          deepBlack: '#080A0E',
          nightBlue: '#101827',
          ancientGold: '#C6A15B',
          luminousGold: '#E8C982',
          stoneGrey: '#8C929B',
          ivoryWhite: '#E8E2D7',
          magicViolet: '#7041B5',
          goldDark: '#8b6c31',
          goldGlow: 'rgba(232, 201, 130, 0.25)',
          violetGlow: 'rgba(112, 65, 181, 0.3)',
          cardBg: 'rgba(16, 24, 39, 0.75)',
          borderGold: 'rgba(198, 161, 91, 0.3)',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at center, transparent 30%, #080A0E 95%)',
        'gold-gradient': 'linear-gradient(135deg, #E8C982 0%, #C6A15B 50%, #8b6c31 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(8,10,14,0.6) 0%, rgba(8,10,14,0.95) 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(198, 161, 91, 0.2)',
        'gold-md': '0 0 30px rgba(198, 161, 91, 0.25)',
        'violet-md': '0 0 30px rgba(112, 65, 181, 0.3)',
        'card-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
