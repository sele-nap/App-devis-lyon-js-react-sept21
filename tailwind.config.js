module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F9F7F3',
        secondary: '#ECE6E6',
        third: '#DAB455',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
