/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}', // важно!
    ],
    theme: {
      extend: {
        keyframes: {
            zoom: {
              '0%, 100%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.1)' },
            },
          },
          animation: {
            zoom: 'zoom 4s ease-in-out infinite',
          },
        animation: {
          scroll: 'scroll 20s linear infinite',
        },
      },
    },
    plugins: [],
  }
  