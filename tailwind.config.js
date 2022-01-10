module.exports = {
  purge: [
    './src/views/*.vue',
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        'blerb-gray': '#f3f4f6',
        'blerb-blue': '#71B8FA',
        'blerb-purple': '#5E5CC2'

      },

    },
    fontFamily: {
      'p-text': ['Inter', 'Arial', 'sans-serif'],
      'heading': ['MavenPro', 'Arial', 'sans-serif']
    }
  },
  plugins: [],
}
