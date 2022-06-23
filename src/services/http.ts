// import Taro from '@tarojs/taro';
// import { HTTP_STATUS } from '../constants/status';
// import publicConfig from '@/config/index';
// import { errorHandler } from '@/common';
// import axios from 'axios-miniprogram';
// const CancelToken = axios.CancelToken;

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
    if (this.pending[key] && isRequest) {
      this.pending[key]('取消重复请求');
    }
    delete this.pending[key];
  }
}

export default HttpRequest;
