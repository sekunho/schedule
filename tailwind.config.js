module.exports = {
  purge: [],
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
