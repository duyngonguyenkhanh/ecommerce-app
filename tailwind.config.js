/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFadeIn: {
          '0%': { transform: 'translateY(-20%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        slideInFadeIn: 'slideInFadeIn 0.5s ease-out',
      },
      colors: {
        primary: '#969292',
        backgoundcl: '#F8F9FA'
      },
    },
  },
  plugins: [],
}