module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js', './layouts/**/*.js'],
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
      }
    }
  },
  variants: {
    // margin: ['responsive', 'hover', 'focus', 'first'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: []
}
