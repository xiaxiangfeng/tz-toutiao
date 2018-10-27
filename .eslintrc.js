// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
  },
  env: {
    browser: true,
    node: true
  },
  parser: "babel-eslint",
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint * files
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-unused-vars": 0
  }
}
