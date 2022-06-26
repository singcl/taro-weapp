import Taro from '@tarojs/taro';

import headersInterceptor from './interceptors/headers';

Taro.addInterceptor(Taro.interceptors.logInterceptor);
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);

Taro.addInterceptor(headersInterceptor);
