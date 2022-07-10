import { defineStore } from 'pinia';
import Taro from '@tarojs/taro';
import { LOGIN_STATUS, LOGIN_TOKEN } from '@/constants';
import API from '@/api';

interface UserInfoProps {
  nickname: string;
  avatarUrl: string;
  mobile: string;
  username?: string;
}

interface AuthState {
  userInfo: UserInfoProps;
  loginStatus: LOGIN_STATUS;
  refreshTokenPromise: Promise<any> | null;
}

interface AuthActions {
  setUserInfo(userInfo: UserInfoProps): void;
  login(): Promise<any>;
  refreshTokenFunc(): Promise<any>;
  reConnect(params: any): Promise<any>;
}

interface AuthGetters<S = AuthState> extends Record<string, ((s: S) => any) | (() => any)> {
  nickname: (s: S) => string;
  avatarUrl: (s: S) => string;
  mobile: (s: S) => string;
  token: () => string;
}

export const useAuthStore = defineStore<string, AuthState, AuthGetters, AuthActions>({
  id: 'authInfo',
  state: () => ({
    loginStatus: LOGIN_STATUS.LOGIN_UN,
    refreshTokenPromise: null,
    userInfo: {
      nickname: '',
      avatarUrl:
        'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
      mobile: '',
      username: undefined,
    },
  }),
  // 相当于Vue的methods方法
  actions: {
    setUserInfo(userInfo: UserInfoProps) {
      this.userInfo = userInfo;
    },
    //
    async login() {
      return await API.auth.TaroLogin();
    },
    // 操作可以通过 this 访问 whole store instance 并提供完整类型（和自动完成✨）支持。
    // @see https://pinia.web3doc.top/core-concepts/actions.html
    // 但是并没有类型提示 TODO:
    // async loginExpired() {
    //   await this.login();
    // },
    // 重新登录获取token
    async refreshTokenFunc() {
      Taro.removeStorageSync(LOGIN_TOKEN);
      return await API.auth.TaroLogin();
    },
    //
    async reConnect(params: any) {
      // 如果页面同时多个接口返回登录过期，确保重新登录接口只调用一次
      if (this.loginStatus !== LOGIN_STATUS.LOGIN_PENDING) {
        this.loginStatus = LOGIN_STATUS.LOGIN_PENDING;
        this.refreshTokenPromise = this.refreshTokenFunc();
      }
      await this.refreshTokenPromise;
      this.loginStatus = LOGIN_STATUS.LOGIN_ALREADY;
      this.refreshTokenPromise = null;
      //
      return Taro.request(params);
    },
  },
  // 相当于Vue的computed计算属性
  getters: {
    nickname: (state) => state.userInfo.nickname,
    avatarUrl: (state) => state.userInfo.avatarUrl,
    mobile: (state) => state.userInfo.mobile,
    token: () => Taro.getStorageSync('token'),
  },
});
