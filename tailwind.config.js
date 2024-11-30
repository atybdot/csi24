/** @type {import('tailwindcss').Config} */
import {fontFamily} from 'tailwindcss/defaultTheme'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily : {
      sans : ["Poppins",...fontFamily.sans],
      mono : ["Geist Mono",...fontFamily.mono]
    },
    extend: {
      colors: {
        "black-russian": {
          DEFAULT: "#00001A",
          50: "#EBEBFF",
          100: "#7676FF",
          200: "#4D4DFF",
          300: "#2424FF",
          400: "#0000FA",
          500: "#0000D2",
          600: "#0000A9",
          700: "#000080",
          800: "#000057",
          900: "#00002E",
          950: "#00001A",
        },
      },
    },
  },
  plugins: [],
};
