/* eslint-disable react-hooks/rules-of-hooks */
import Taro, { Chain, RequestTask } from '@tarojs/taro';
import API from '@/api';
import { LOGIN_TOKEN, LOGIN_STATUS } from '@/constants';
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
    // 登录过期重新登录
    if (code === BusinessCode.LOGIN_EXPIRED) {
      const authStore = useAuthStore();
      // 如果页面同时多个接口返回登录过期，确保重新登录接口只调用一次
      if (authStore.loginStatus !== LOGIN_STATUS.LOGIN_PENDING) {
        authStore.$patch({ loginStatus: LOGIN_STATUS.LOGIN_PENDING });
        Taro.removeStorageSync(LOGIN_TOKEN);
        // 或者RELOAD？
        await API.auth.TaroLogin();
        authStore.$patch({ loginStatus: LOGIN_STATUS.LOGIN_ALREADY });
      }
      return Promise.reject(ZhCnText[code]);
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
