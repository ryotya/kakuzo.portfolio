/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sp: "480px",
      // => @media (min-width: 440px) { ... }

      tab: "640px",
      // => @media (min-width: 640px) { ... }

      spc: "840px",
      // => @media (min-width: 1024px) { ... }

      lap: "1040px",
      // => @media (min-width: 1024px) { ... }

      pc: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
