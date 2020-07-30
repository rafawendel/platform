// const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    'tailwindcss', // ('./tailwind.config.js')
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env', // require('@fullhuman/postcss-purgecss')
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
}
