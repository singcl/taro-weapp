import Taro from '@tarojs/taro';
import { BASE_URL } from '@/config';

interface DetailResponse {
  username?: string;
  nickname: string;
  mobile: string;
  avatar_url: string;
}

// 开发者服务器登录接口
export async function detail() {
  return Taro.request<HttpStandardResponse<DetailResponse>>({
    url: `${BASE_URL}/weixin/auth/info`,
  });
}
