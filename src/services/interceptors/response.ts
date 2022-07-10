/* eslint-disable react-hooks/rules-of-hooks */
import Taro, { Chain, RequestTask } from '@tarojs/taro';
import { useAuthStore } from '@/stores';

import { Code, BusinessCode } from './../code/code';
import { ZhCnText } from './../code/zhCn';

export default async function headersInterceptor(chain: Chain) {
  const requestParams = chain.requestParams;
  const response = await (chain.proceed(requestParams) as RequestTask<HttpStandardResponse<any>>);
  const { statusCode, data } = response;
  const { code } = data;
  //
  if (statusCode !== Code.HTTP_SUCCESS) {
    // 登录过期重新登录重连接口
    if (code === BusinessCode.LOGIN_EXPIRED) {
      const authStore = useAuthStore();
      return authStore.reConnect(requestParams);
    }
    // 通用错误提示
    Taro.showToast({
      title: ZhCnText[statusCode],
      icon: 'error',
    });
    return Promise.reject(ZhCnText[statusCode]);
  }

  return response;
}
