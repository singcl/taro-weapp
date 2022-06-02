// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
/* eslint-disable import/no-commonjs */
module.exports = {
  // See name normalization for more specifics on configuring the path of a plugin or preset.
  // https://babel.dev/docs/en/options#name-normalization
  presets: [
    [
      'taro',
      {
        framework: 'vue3',
        ts: true,
      },
    ],
  ],
};
