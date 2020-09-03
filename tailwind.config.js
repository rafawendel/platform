module.exports = {
  purge: ['./src/styles/*', './src/**/*.js', '!./src/**/api/*'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-main-primary)',
        secondary: 'var(--color-main-secondary)',
        darker: 'var(--color-dark-primary)',
        dark: 'var(--color-dark-secondary)',
        light: 'var(--color-light-primary)',
        lighter: 'var(--color-light-secondary)',
        info: 'var(--color-info)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        rose: 'var(--color-rose)',
        danger: 'var(--color-danger)'
      },
      spacing: {
        '1/2': '2px'
      }
    }
  },
  corePlugins: {
    backgroundOpacity: true
  },
  variants: {
    visibility: ['responsive', 'first'],
    margin: ['responsive', 'hover', 'focus', 'first', 'last'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
