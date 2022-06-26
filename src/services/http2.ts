import Taro from '@tarojs/taro';
// import { HTTP_STATUS } from '../constants/status';
import publicConfig from '@/config/index';
import { errorHandler } from '@/common';
// import axios from 'axios-miniprogram';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const CancelToken = axios.CancelToken;

//
class HttpRequest {
  private pending: Record<string, (msg?: string) => void> = {};

  constructor(private baseUrl: string) {}

  // 获取axios配置
  getInsideConfig() {
    const config: AxiosRequestConfig = {
      baseURL: this.baseUrl,
      headers: {
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
    // 简单的请求拦截器
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
    // 简单的响应请求的拦截器
    instance.interceptors.response.use(
      (res) => {
        const key = `${res.config.url}&${res.config.method}`;
        this.removePending(key);
        if (res.status === 200) {
          return Promise.resolve(res.data);
        } else {
          return Promise.reject(res);
        }
      },
      (err) => {
        errorHandler(err);
        return Promise.reject(err);
      }
    );
  }

  // 创建实例
  request(options: AxiosRequestConfig) {
    const instance = axios.create();
    const newOptions = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(newOptions);
  }

  get(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> | Promise<HttpResponse> {
    const options = Object.assign(
      {
        method: 'get',
        url: url,
      },
      config
    );
    return this.request(options);
  }

  post(
    url: string,
    data?: unknown
  ): Promise<AxiosResponse> | Promise<HttpResponse> {
    return this.request({
      method: 'post',
      url: url,
      data: data,
    });
  }
}

export default HttpRequest;
