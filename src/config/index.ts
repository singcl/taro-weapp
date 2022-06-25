export default {
  baseUrl: {
    dev: 'http://localhost:3000',
    pro: 'xxx',
  },
  // 请求时不需要拦截的路径
  publicPath: [/^\/public/, /^\/login/],
};
