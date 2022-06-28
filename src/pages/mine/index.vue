<template>
  <view :class="styles['wrapper']">
    <!-- https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html -->
    <!-- https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html -->
    <button
      :class="styles['avatar-wrapper']"
      open-type="chooseAvatar"
      v-on:chooseavatar="onChooseAvatar"
    >
      <image :class="styles['avatar']" :src="wxAvatarUrl"></image>
    </button>
    <label :class="styles['form-item']">
      <text :class="styles['form-item__title']">昵称</text>
      <input type="nickname" placeholder="请输入昵称" />
    </label>
    <button
      :class="styles['button-sp-area']"
      type="primary"
      open-type="getPhoneNumber"
      @getphonenumber="getPhoneNumber"
    >
      获取手机号
    </button>
    <!-- https://developers.weixin.qq.com/community/develop/doc/000e881c7046a8fa1f4d464105b001 -->
    <!-- <open-data type="userAvatarUrl"></open-data> -->
    <!-- <open-data type="userNickName"></open-data> -->
  </view>
</template>

<script lang="ts">
export default {
  name: 'MineCenter',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import styles from './index.module.styl';

const defaultAvatarUrl =
  'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
// 获取微信头像
const wxAvatarUrl = ref(defaultAvatarUrl);
function onChooseAvatar(e: any) {
  const { avatarUrl } = e.detail;
  wxAvatarUrl.value = avatarUrl;
}

// 获取手机号
function getPhoneNumber(e: any) {
  console.log(e.detail.code);
}
</script>
