<script lang="ts">
import { defineComponent } from 'vue';
import API from '@/api';
import { useAuthStore } from '@/stores';
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
    await API.auth.TaroLogin();
    const {
      data: { data },
    } = await API.auth.detail();
    if (!data) {
      return Promise.reject(null);
    }
    const authStore = useAuthStore();
    authStore.$patch({
      userInfo: {
        nickname: data.nickname,
        avatarUrl: data.avatar_url,
        mobile: data.mobile,
        username: data.username,
      },
    });
  },
});
</script>
