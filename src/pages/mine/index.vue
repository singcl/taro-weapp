<template>
  <view>
    <!-- https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html -->
    <!-- https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html -->
    <button
      class="avatar-wrapper"
      open-type="chooseAvatar"
      v-on:chooseavatar="onChooseAvatar"
    >
      <image class="avatar" :src="wxAvatarUrl"></image>
    </button>
    <input type="nickname" class="weui-input" placeholder="请输入昵称" />
    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
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
