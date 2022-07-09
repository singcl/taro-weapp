/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {
    // 关闭autoprefixer以减小打包体积 如遇到样式兼容问题再开启
    postcss: {
      autoprefixer: {
        enable: false,
        config: {
          /* autoprefixer 配置项 */
        },
      },
    },
  },
  h5: {},
};
