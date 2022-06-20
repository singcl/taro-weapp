<template>
  <view class="index">
    <XmCounter />
    <button type="primary" :class="styles['button-sp-area']" @tap="handleLogin">
      登录
    </button>
    <text v-if="loginData">{{ loginData.code }}</text>
  </view>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
import styles from './index.module.styl';
import XmCounter from '@/components/XmCounter/index.vue';

interface LoginResponse {
  code: string;
}

export default {
  name: 'XmIndex',
  components: {
    XmCounter,
  },
  computed: {
    styles: () => styles,
  },
  data() {
    return {
      loginData: null,
    };
  },
  methods: {
    async handleLogin() {
      const { code } = await Taro.login();
      try {
        Taro.showLoading();
        const { data: loginData } = await Taro.request<LoginResponse>({
          // 使用局域网IP地址，方便在手机上也可以访问网络
          url: 'http://192.168.2.101:9000/weixin/login',
          method: 'GET',
          data: { code },
          header: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
        });
        this.loginData = loginData;
        Taro.showToast({
          title: `登录成功`,
          icon: 'success',
          duration: 2000,
        });
      } finally {
        Taro.hideLoading();
      }
    },
  },
};
</script>
