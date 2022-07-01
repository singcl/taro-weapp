import { defineStore } from 'pinia';
import Taro from '@tarojs/taro';

interface UserInfoProps {
  nickname: string;
  avatarUrl: string;
  mobile: string;
  username?: string;
}

interface AuthState {
  userInfo: UserInfoProps;
}

interface AuthGetters<S = AuthState>
  extends Record<string, ((s: S) => any) | (() => any)> {
  nickname: (s: S) => string;
  avatarUrl: (s: S) => string;
  mobile: (s: S) => string;
  token: () => string;
}

export const useAuth = defineStore<string, AuthState, AuthGetters>({
  id: 'authInfo',
  state: () => ({
    userInfo: {
      nickname: '',
      avatarUrl:
        'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
      mobile: '',
      username: undefined,
    },
  }),
  actions: {
    setUserInfo(userInfo: UserInfoProps) {
      this.userInfo = userInfo;
    },
  },
  getters: {
    nickname: (state) => state.userInfo.nickname,
    avatarUrl: (state) => state.userInfo.avatarUrl,
    mobile: (state) => state.userInfo.mobile,
    token: () => Taro.getStorageSync('token'),
  },
});
