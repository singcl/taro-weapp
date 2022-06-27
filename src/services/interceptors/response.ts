import Taro, { Chain, RequestTask } from '@tarojs/taro';

import { Code } from './../code/code';
import { ZhCnText } from './../code/zhCn';

export default async function headersInterceptor(chain: Chain) {
  const requestParams = chain.requestParams;
  const response = await (chain.proceed(requestParams) as RequestTask<any>);
  const { statusCode } = response;
  if (statusCode === Code.HTTP_LOGIN_EXPIRE) {
    Taro.showToast({ title: ZhCnText[Code.HTTP_LOGIN_EXPIRE], icon: 'error' });
  }
  return response;
}
