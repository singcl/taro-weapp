import Taro, { Chain } from '@tarojs/taro';

export default function headersInterceptor(chain: Chain) {
  const requestParams = chain.requestParams;
  const { header = {} } = requestParams;
  header['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';

  const token = Taro.getStorageSync('token');
  if (token) header['WxToken'] = token;

  return chain.proceed(Object.assign(requestParams, { header }));
}
