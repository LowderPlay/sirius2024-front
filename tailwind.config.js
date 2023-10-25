import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        promo: "url('assets/promo-background.svg')"
      }
    },
    fontFamily: {
      sans: "Montserrat",
    },
    colors: {
      veryLightGrey: '#F8F8F8',
      darkGrey: '#9F9F9F',
      accent: '#FEA300',
      white: colors.white,
      backgroundAccent: '#fff3dd',
      transparent: colors.transparent,
    }
  },
  plugins: [],
}

