module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    fontFamily: {
      main: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#F9F7F3",
        secondary: "#ECE6E6",
        third: "#DAB455",
      },
    },
  },
  plugins: [],
};
