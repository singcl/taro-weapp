import Taro, { Chain, RequestTask } from '@tarojs/taro';

import { Code } from './../code/code';
import { ZhCnText } from './../code/zhCn';

export default async function headersInterceptor(chain: Chain) {
  const requestParams = chain.requestParams;
  const response = await (chain.proceed(requestParams) as RequestTask<any>);
  const { statusCode } = response;
  if (statusCode !== Code.HTTP_SUCCESS) {
    Taro.showToast({
      title: ZhCnText[statusCode],
      icon: 'error',
    });
    return Promise.reject(ZhCnText[statusCode]);
  }

  return response;
}
