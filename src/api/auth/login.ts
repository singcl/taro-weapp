import Taro from '@tarojs/taro';
import { BASE_URL } from '@/config';
import { LOGIN_TOKEN } from '@/constants';

interface LoginParams {
  code: string;
}

interface LoginResponse {
  token: string;
}

// 开发者服务器登录接口
export async function login(data: LoginParams) {
  return Taro.request<HttpStandardResponse<LoginResponse>, LoginParams>({
    url: `${BASE_URL}/weixin/login`,
    data,
  });
}

// 小程序登录
export async function TaroLogin() {
  try {
    await Taro.checkSession();
    const token = Taro.getStorageSync(LOGIN_TOKEN);
    return token ? token : await Promise.reject(null);
  } catch (err) {
    const { code } = await Taro.login();
    const {
      data: { data },
    } = await login({ code });
    if (!data) {
      return Promise.reject(null);
    }
    //
    const { token } = data;
    Taro.setStorageSync(LOGIN_TOKEN, token);

    Taro.showToast({
      title: `登录成功`,
      icon: 'success',
      duration: 2000,
    });
    return token;
  }
}
