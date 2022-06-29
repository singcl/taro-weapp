<script lang="ts">
import { defineComponent } from 'vue';
import API from '@/api';
import './app.styl';

export default defineComponent({
  onShow(options) {
    //
    console.log('----', options);
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
  //
  onLaunch() {
    // 登录
    API.auth.TaroLogin();
  },
});
</script>
