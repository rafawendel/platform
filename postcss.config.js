// const tailwindcss = require('tailwindcss');

module.exports = {
  // plugins: [
  //   tailwindcss('./tailwind.config.js'),
  //   require('autoprefixer'),
  //   require('@fullhuman/postcss-purgecss')({
  //     content: ['./pages/*.js', './components/*.js', './layouts/*.js'],
  //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  //   })
  // ]
  plugins: ['tailwindcss', 'postcss-preset-env']
};

// "@fullhuman/postcss-purgecss": "^2.2.0",
// "autoprefixer": "9.6.1",
