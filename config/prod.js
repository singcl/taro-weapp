/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    NODE_ENV: '"production"',
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
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  },
};
