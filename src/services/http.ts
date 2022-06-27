import Taro from '@tarojs/taro';

import headersInterceptor from './interceptors/headers';
import responseInterceptor from './interceptors/response';

Taro.addInterceptor(Taro.interceptors.logInterceptor);
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);

Taro.addInterceptor(headersInterceptor);
Taro.addInterceptor(responseInterceptor);
