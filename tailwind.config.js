module.exports = {
  purge: [
    "dist/index.html"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: theme => ({
        sans: ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
