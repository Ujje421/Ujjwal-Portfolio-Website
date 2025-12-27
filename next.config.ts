/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        }
      },
      animation: {
        'glitch-slow': 'glitch 0.5s ease-in-out infinite',
      },
      colors: {
        batBlack: "#050505",
        batGray: "#1A1A1A",
        batAccent: "#66FCF1", // Tactical Cyan
      },
    },
  },
  plugins: [],
};