<script lang="ts">
import { defineComponent } from 'vue';
import API from '@/api';
import { useAuthStore } from '@/stores';
import { LOGIN_STATUS } from '@/constants';
import { ensureAvatarUrl } from '@/utils';
import './app.styl';

export default defineComponent({
  onShow(options) {
    //
    console.log('----', options);
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
  //
  async onLaunch() {
    // 登录
    const authStore = useAuthStore();
    await API.auth.TaroLogin();
    authStore.$patch({ loginStatus: LOGIN_STATUS.LOGIN_ALREADY });
    const {
      data: { data },
    } = await API.auth.detail();
    if (!data) {
      return Promise.reject(null);
    }
    authStore.$patch({
      userInfo: {
        nickname: data.nickname,
        avatarUrl: ensureAvatarUrl(data.avatar_url),
        mobile: data.mobile,
        username: data.username,
      },
    });
  },
});
</script>
