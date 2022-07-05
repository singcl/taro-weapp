<!-- https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html -->
<!-- https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html -->
<template>
  <!-- tab mine center -->
  <view :class="styles['wrapper']">
    <!-- header -->
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
          <nut-button size="mini" :class="styles['header-info__settings']">账户设置</nut-button>
        </view>
      </view>
      <view :class="styles['hearder-func-bars-wrapper']">
        <view :class="styles['hearder-func-bars']">
          <view
            v-for="bar in funtionalBars.bars"
            :key="bar.text"
            :style="{ color: bar.color }"
            :class="styles['hearder-func-bars__item']"
          >
            <nut-icon :name="bar.icon" :size="bar.size" :color="bar.color"></nut-icon>
            <text :class="styles['hearder-func-bars__text']">{{ bar.text }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- main container -->
    <view :class="styles['main-container']">
      <XmSimpleCard :class="styles['header-shops-list']">
        <view :class="styles['hearder-func-bars']">
          <view
            v-for="shop in funtionalBars.shops"
            :key="shop.text"
            :style="{ color: shop.color }"
            :class="styles['hearder-func-bars__item']"
          >
            <nut-icon
              font-class-name="iconfont"
              class-prefix="icon"
              :name="shop.icon"
              :size="shop.size"
              :color="shop.color"
            ></nut-icon>
            <text :class="styles['hearder-func-bars__text']">{{ shop.text }}</text>
          </view>
        </view>
      </XmSimpleCard>

      <XmSimpleCard :class="styles['wallet-card']">
        <view>
          <view :class="styles['wallet-card-header']">
            <text :class="styles['wallet-card-header__title']">我的钱包</text>
            <view :class="styles['wallet-card-header__enter']">
              <text>进入钱包</text>
              <nut-icon name="arrow-right"></nut-icon>
            </view>
          </view>
          <view :class="styles['wallet-card-menu']">
            <xm-wallet :number="22.5" unit="元" title="最高可领" desc="天天提现"></xm-wallet>
          </view>
        </view>
      </XmSimpleCard>
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

    <!-- footer -->
    <view :class="styles['footer']">
      <text>https://github.com/singcl</text>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MineCenter',
};
</script>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAuth } from '@/stores';
import { storeToRefs } from 'pinia';
import styles from './index.module.styl';

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
//
const funtionalBars = reactive({
  bars: [
    { icon: 'star', text: '收藏', color: '#2c2817', size: '20' },
    { icon: 'eye', text: '关注公众号', color: '#2c2817', size: '20' },
    { icon: 'service', text: '客服', color: '#2c2817', size: '20' },
    { icon: 'dshop', text: '红包卡券', color: '#2c2817', size: '20' },
  ],
  shops: [
    { icon: 'dingdan', text: '我的订单', color: '#ff8201', size: '26' },
    { icon: 'daifukuan', text: '待付款', color: '#ff8201', size: '26' },
    { icon: 'daishouhuo', text: '待收货', color: '#ff8201', size: '26' },
    { icon: 'daipingjia', text: '待评价', color: '#ff8201', size: '26' },
    { icon: 'shouhou', text: '退款/售后', color: '#ff8201', size: '26' },
  ],
});

// // 获取手机号
// function getPhoneNumber(e: any) {
//   console.log(e.detail.code);
// }
</script>
