<template>
  <view class="index">
    <XmTips />
    <button type="primary" :class="styles['button-sp-area']" @tap="handleLogin">
      获取用户信息
    </button>
    <text v-if="loginData">{{ loginData.code }}</text>
  </view>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
// import API from '@/api';
import styles from './index.module.styl';

export default {
  name: 'XmIndex',
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
      const token = Taro.getStorageSync('token');
      console.log('token', token);
    },
  },
};
</script>
