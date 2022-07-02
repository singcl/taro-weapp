<template>
  <view :class="styles['wrapper']">
    <!-- https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html -->
    <!-- https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html -->
    <view :class="styles['header']">
      <view :class="styles['header-mine']">
        <button :class="styles['avatar-wrapper']" open-type="chooseAvatar" v-on:chooseavatar="onChooseAvatar">
          <nut-avatar :url="wxAvatarUrl" shape="round" size="large"></nut-avatar>
          <!-- <image :class="styles['avatar']" :src="wxAvatarUrl"></image> -->
        </button>
        <view :class="styles['header-info']">
          <text :class="styles['header-info__nickname']">
            {{ nickname }}
          </text>
          <nut-button size="small" :class="styles['header-info__settings']">账户设置</nut-button>
        </view>
      </view>
      <view> </view>
    </view>
    <!-- <input type="nickname" placeholder="请输入昵称" /> -->
    <!-- <label :class="styles['form-item']">
      <text :class="styles['form-item__title']">昵称</text>
      <input type="nickname" placeholder="请输入昵称" />
    </label> -->
    <!-- <button
      :class="styles['button-sp-area']"
      type="primary"
      open-type="getPhoneNumber"
      @getphonenumber="getPhoneNumber"
    >
      获取手机号
    </button> -->
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
import styles from './index.module.styl';
import { useAuth } from '@/stores';
import { storeToRefs } from 'pinia';

//
const auth = useAuth();

// 获取微信头像
// @see https://pinia.web3doc.top/core-concepts/#%E4%BD%BF%E7%94%A8-store
// 如何使用解构的store
const wxAvatarUrl = storeToRefs(auth).avatarUrl;
const nickname = storeToRefs(auth).nickname;
function onChooseAvatar(e: any) {
  const { avatarUrl } = e.detail;
  auth.$patch({ userInfo: { avatarUrl: avatarUrl } });
}

// // 获取手机号
// function getPhoneNumber(e: any) {
//   console.log(e.detail.code);
// }
</script>
