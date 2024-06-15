/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0F141E",
      },
      screens: {
        "3xl": "1600px",
      },
      textColor: {
        paragraph: "#646567",
      },
    },
    letterSpacing: {
      'space-1': '0.01em',
      'space-2': '0.02em',
      'space-4': '0.04em',
      wide: ".025em",
      wider: ".10em",
      widest: ".20em",
    },
  },
  plugins: [],
};
