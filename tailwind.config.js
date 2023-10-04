/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d0833",
        "d-pri": "#08051e",
        "l-pri": "#100a42",
        "r-pri": "#120a42",
        "primary-color": "#120B48",
        "grey-text-color": "#616163",
        "blue-header-color": "#1B233D",
        "black-header-color": "#141414",
        "grey-black-color": "#000000BF",
        "form-bg": "rgba(231, 231, 237, 1)",
        "form-btn": "rgba(96, 92, 132, 1)",
      },
        fontFamily: {
        sora: ["Sora", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },    
    },
  },
  plugins: [],
};


