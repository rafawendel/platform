module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ],
    'block-no-empty': null,
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'unit-whitelist': ['em', 'rem', 's']
  }
}
