/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/styles/output.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shake-rotate': 'shakeRotate 1s ease-in-out infinite',
        'move-and-shrink': 'moveAndShrink 1s ease-in-out forwards',
      },
      keyframes: {
        shakeRotate: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        moveAndShrink: {
          '0%': { transform: 'translateX(0) scale(1)' },
          '100%': { transform: 'translateX(-60%) scale(0.5)' },
        },
      },
    },
  },
  plugins: [],
};


