<script lang="ts">
import { defineComponent } from 'vue';
import API from '@/api';
import { useAuth } from '@/stores';
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
    const info = await API.auth.detail();
    console.log('----info:', info);
    // TODO 获取用户信息
    const auth = useAuth();
    auth.$patch({
      userInfo: {
        nickName: '',
        avatarUrl: '',
      },
    });
  },
});
</script>
