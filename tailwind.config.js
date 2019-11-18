module.exports = {
  theme: {
    extend: {
        fontSize: {
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '7rem',
        },
        borderWidth: {
            '1.5': '1.5px'
        }
    }
  },
  variants: {
      borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}
