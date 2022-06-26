import { Chain } from '@tarojs/taro';

export default function headersInterceptor(chain: Chain) {
  const requestParams = chain.requestParams;
  const { header = {} } = requestParams;
  header['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';

  return chain.proceed(Object.assign(requestParams, { header }));
  //   .then((res) => {
  //   console.log(`http <-- ${url} result:`, res);
  //   return res;
  // });
}
