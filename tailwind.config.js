/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "23.438rem",
          sm: "40rem",
          md: "48rem",
          lg: "64rem",
          xl: "71.25rem",
          "2xl": "71.25rem",
        },
      },
      colors: {
        primary: "#ffbe33", //sarı
        secondary: "#222831", //siyah
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
