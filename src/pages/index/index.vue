<template>
  <view class="index">
    <XmCounter />
    <button type="primary" :class="styles['button-sp-area']" @tap="handleLogin">
      获取用户信息
    </button>
    <!-- https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html -->
    <!-- https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html -->
    <button
      class="avatar-wrapper"
      open-type="chooseAvatar"
      v-on:chooseavatar="onChooseAvatar"
    >
      <image class="avatar" :src="avatarUrl"></image>
    </button>
    <input type="nickname" class="weui-input" placeholder="请输入昵称" />
    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
      获取手机号
    </button>
    <!-- https://developers.weixin.qq.com/community/develop/doc/000e881c7046a8fa1f4d464105b001 -->
    <open-data type="userAvatarUrl"></open-data>
    <open-data type="userNickName"></open-data>
    <text v-if="loginData">{{ loginData.code }}</text>
  </view>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
// import API from '@/api';
import styles from './index.module.styl';
import XmCounter from '@/components/XmCounter/index.vue';

const defaultAvatarUrl =
  'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';

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
      avatarUrl: defaultAvatarUrl,
    };
  },
  methods: {
    async handleLogin() {
      const token = Taro.getStorageSync('token');
      console.log('token', token);
    },

    onChooseAvatar(e) {
      const { avatarUrl } = e.detail;
      this.avatarUrl = avatarUrl;
    },

    getPhoneNumber(e) {
      console.log(e.detail.code);
    },
  },
};
</script>
