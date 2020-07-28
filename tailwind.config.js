module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js', './layouts/**/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-red)',
        'p-dark-blue': 'var(--primary-red)',
        's-dark-blue': 'var(--primary-red)',
        'p-clear-grey': 'var(--primary-red)',
        's-clear-grey': 'var(--primary-red)',
        'success': 'var(--success)',
        'info': 'var(--info)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'rose': 'var(--rose)',
        'danger': 'var(--danger)'
      }
    }
  },
  variants: [
    'responsive',
    'group-hover',
    // 'focus-within', // this one is a motherfucking error-causer
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled'
  ],
  plugins: []
}
