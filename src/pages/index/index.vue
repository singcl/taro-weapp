<template>
  <view class="index">
    <XmTips />
    <button type="primary" :class="styles['button-sp-area']" @tap="handleShowUserInfo">获取用户信息</button>

    <view v-if="showUserInfo">
      <div>
        <text>Token:</text>
        <text>{{ token }}</text>
      </div>
      <div>
        <text>昵称：</text>
        <text>{{ authInfoStore.nickname }}</text>
      </div>
      <div>
        <text>头像</text>
        <nut-avatar :url="authInfoStore.avatarUrl" shape="round" size="large"></nut-avatar>
      </div>
      <div>
        <text>电话：</text>
        <text>{{ authInfoStore.mobile }}</text>
      </div>
    </view>
  </view>
</template>

<script lang="ts">
import { useAuth } from '@/stores';
import { mapState, mapStores } from 'pinia';

// import API from '@/api';
import styles from './index.module.styl';

export default {
  name: 'XmIndex',
  computed: {
    styles: () => styles,
    // @see https://pinia.web3doc.top/cookbook/options-api.html#giving-access-to-the-whole-store
    ...mapStores(useAuth),
    ...mapState(useAuth, { token: (state) => state.token }),
  },
  data() {
    return {
      showUserInfo: false,
    };
  },
  methods: {
    async handleShowUserInfo() {
      this.showUserInfo = true;
    },
  },
};
</script>
