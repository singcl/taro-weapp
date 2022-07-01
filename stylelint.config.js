// @see https://www.npmjs.com/package/stylelint-stylus
// @see https://stylelint.io/user-guide/configure/
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    // @see https://www.npmjs.com/package/stylelint-stylus
    'stylelint-stylus/standard',
  ],
  rules: {
    // override/add rules settings here, such as:
    // "stylus/declaration-colon": "never"
  },
};
