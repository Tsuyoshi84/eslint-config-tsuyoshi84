module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['jsdoc'],
  rules: {
    // jsdoc plugin
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': 'error',
  },
}
