<template>
  <view class="index">
    <XmCounter />
    <button type="primary" :class="styles['button-sp-area']" @tap="handleLogin">
      登录
    </button>
  </view>
</template>

<script>
import Taro from '@tarojs/taro';
import styles from './index.module.styl';
import XmCounter from '@/components/XmCounter';

export default {
  name: 'XmIndex',
  components: {
    XmCounter,
  },
  computed: {
    styles: () => styles,
  },
  methods: {
    async handleLogin() {
      const { code } = await Taro.login();
      try {
        Taro.showLoading();
        await Taro.request({
          url: 'http://127.0.0.1:9000/weixin/login',
          method: 'GET',
          data: { code },
          header: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
        });
      } finally {
        Taro.hideLoading();
      }
    },
  },
};
</script>
