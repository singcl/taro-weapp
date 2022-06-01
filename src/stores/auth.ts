import { defineStore } from 'pinia';

interface UserInfoProps {
  nickName: string;
  avatarUrl: string;
}

export const useAuth = defineStore({
  id: 'authInfo',
  state: () => ({
    userInfo: {
      nickName: '',
      avatarUrl: '',
    },
    isLogin: false,
  }),
  actions: {
    login() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
    },
    setUserInfo(userInfo: UserInfoProps) {
      this.userInfo = userInfo;
    },
  },
});
