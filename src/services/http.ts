import Taro from '@tarojs/taro';
// import { HTTP_STATUS } from '../constants/status';
import publicConfig from '@/config/index';
import { errorHandler } from '@/common';
// import axios from 'axios-miniprogram';
import axios, { AxiosInstance } from 'axios';

const CancelToken = axios.CancelToken;

//
class HttpRequest {
  private pending: Record<string, (msg?: string) => void> = {};

  constructor(private baseUrl: string) {}

  // 获取axios配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      timeout: 10000,
    };
    return config;
  }

  // 移除请求状态
  removePending(key: string, isRequest = false) {
    if (isRequest && this.pending[key]) {
      this.pending[key]('取消重复请求');
    }
    delete this.pending[key];
  }

  // 设定拦截器
  interceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(
      (config) => {
        console.log('kiko :>> ', config);
        let isPublic = false;
        publicConfig.publicPath.forEach((path) => {
          const reqUrl = config.url || '';
          isPublic = isPublic || path.test(reqUrl);
        });
        const token = Taro.getStorageSync('token');
        if (token && isPublic) {
          config.headers && (config.headers.Token = token);
        }
        const key = `${config.url}&${config.method}`;
        this.removePending(key, true);
        config.cancelToken = new CancelToken((cancel) => {
          this.pending[key] = cancel;
        });
        return config;
      },
      (err) => {
        errorHandler(err);
        return Promise.reject(err);
      }
    );
  }
}

export default HttpRequest;
