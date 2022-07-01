import { defineStore } from 'pinia';

interface UserInfoProps {
  nickname: string;
  avatarUrl: string;
  mobile: string;
  username?: string;
}

interface AuthState {
  userInfo: UserInfoProps;
}

export const useAuth = defineStore<string, AuthState>({
  id: 'authInfo',
  state: () => ({
    userInfo: {
      nickname: '',
      avatarUrl: '',
      mobile: '',
      username: undefined,
    },
  }),
  actions: {
    setUserInfo(userInfo: UserInfoProps) {
      this.userInfo = userInfo;
    },
  },
});
