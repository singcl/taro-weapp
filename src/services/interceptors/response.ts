import { LOGIN_TOKEN } from '@/constants';
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
    if (statusCode === Code.HTTP_LOGIN_EXPIRE) {
      Taro.removeStorageSync(LOGIN_TOKEN);
    }
    return Promise.reject(ZhCnText[statusCode]);
  }

  return response;
}
