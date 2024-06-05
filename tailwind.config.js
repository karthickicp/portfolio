/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0F141E",
      },
      screens: {
        '3xl': '1600px',
      }
    },
    letterSpacing: {
      wide: ".025em",
      wider: ".10em",
      widest: ".20em",
    },
  },
  plugins: [],
};
