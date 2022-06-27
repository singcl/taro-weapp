import Taro from '@tarojs/taro';
import { BASE_URL } from '@/config';

interface LoginParams {
  code: string;
}

interface LoginResponse {
  token: string;
}

// 开发者服务器登录接口
export async function login(data: LoginParams) {
  return Taro.request<LoginResponse, LoginParams>({
    url: `${BASE_URL}/weixin/login`,
    data,
  });
}

// 小程序登录
export async function TaroLogin() {
  try {
    await Taro.checkSession();
    const token = Taro.getStorageSync('token');
    return token ? true : await Promise.reject('token:expired');
  } catch (err) {
    const { code } = await Taro.login();
    const {
      data: { token },
    } = await login({ code });
    //
    Taro.setStorageSync('token', token);
    Taro.showToast({
      title: `登录成功`,
      icon: 'success',
      duration: 2000,
    });
    return true;
  }
}
