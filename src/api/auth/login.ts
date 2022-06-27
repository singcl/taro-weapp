import Taro from '@tarojs/taro';
import { BASE_URL } from '@/config';

interface LoginParams {
  code: string;
}

interface LoginResponse {
  token: string;
}

// 登录接口
export default function login(data: LoginParams) {
  return Taro.request<LoginResponse, LoginParams>({
    url: `${BASE_URL}/weixin/login`,
    data,
  });
}
