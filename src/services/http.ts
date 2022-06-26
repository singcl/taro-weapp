import Taro from '@tarojs/taro';

Taro.addInterceptor(Taro.interceptors.logInterceptor);
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);
