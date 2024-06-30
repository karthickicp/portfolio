/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0F141E",
        gray: "#878A8F",
        "pitchBlack": "#000",
      },
      borderColor: {
        gray: {
          300: "#DFDFDF",
        },
        blue: {
          100: "#CEE7FF",
        },
        green: {
          700: "#008320"
        }
      },
      divideColor: {
        gray: {
          600: "#646567",
        },
      },
      screens: {
        "3xl": "1600px",
        'touch-hover': {'raw': '(hover: hover)'},
      },
      textColor: {
        paragraph: "#646567",
        category: "#666",
        copyright: "#665D5D",
      },
      transitionProperty: {
        transform: "transform",
      },
      transitionDuration: {
        200: "200ms",
      },
      translate: {
        full: "100%",
        0: "0",
      },
      backgroundColor: {
        "halfWhite": "#F7F8F9",
      },
    },
    letterSpacing: {
      "space-1": "0.01em",
      "space-2": "0.02em",
      "space-4": "0.04em",
      "space-24": "0.24em",
      wide: ".025em",
      wider: ".10em",
      widest: ".20em",
    },
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [],
};
