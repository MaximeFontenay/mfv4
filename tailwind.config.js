/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#C6B5A0",
        dark: "#2D2D2D",
        accent: "#C0863E",
      },
      fontFamily: {
        satoshi: ["satoshi", "system-ui", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
