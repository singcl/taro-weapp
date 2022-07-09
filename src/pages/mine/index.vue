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
            <view
              v-for="(wallet, index) in funtionalBars.wallets"
              :key="index"
              :class="styles['wallet-card-menu__item']"
            >
              <xm-wallet
                :number="wallet.number"
                :unit="wallet.unit"
                :value="wallet.value"
                :title="wallet.title"
                :desc="wallet.desc"
              ></xm-wallet>
            </view>
          </view>
        </view>
      </XmSimpleCard>

      <xm-simple-card :class="styles['mine-nut-swiper-wrapper']">
        <nut-swiper
          :init-page="funtionalBars.page"
          :pagination-visible="true"
          pagination-color="#426543"
          auto-play="3000"
          :class="styles['mine-nut-swiper']"
        >
          <nut-swiper-item
            v-for="(img, index) in funtionalBars.imgs"
            :key="index"
            :class="styles['mine-nut-swiper__item']"
          >
            <img :class="styles['mine-nut-swiper__img']" :src="img.url" alt="" />
          </nut-swiper-item>
        </nut-swiper>
      </xm-simple-card>

      <xm-simple-card :class="styles['activities-wrapper']">
        <XmActivities :activities="funtionalBars.activities" />
      </xm-simple-card>

      <xm-simple-card :class="styles['activities-wrapper']">
        <XmActivities :activities="funtionalBars.activities2" />
      </xm-simple-card>
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

// TODO: 迁移至对象存储服务
import AZhibo from '@/assets/font/icons/a-zhibo.png';
import AReDian from '@/assets/font/icons/a-redian.png';
import AVip from '@/assets/font/icons/a-vip.png';
import AMianFei from '@/assets/font/icons/a-mianfei.png';
import AMiaoSha from '@/assets/font/icons/a-miaosha.png';
import ADaTi from '@/assets/font/icons/a-dati.png';
import AQuan from '@/assets/font/icons/a-quan.png';
import AYinYue from '@/assets/font/icons/a-yinyue.png';
import ACherry from '@/assets/font/icons/a-cherry.png';

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

  wallets: [
    { number: 22.5, unit: '万', value: 101, title: '借钱', desc: '大约可借' },
    { number: 7, unit: '月', value: 0, title: '消费账单', desc: '待订阅' },
    { number: 5.04, unit: '元', value: 0, title: '最高可领', desc: '笔笔返现' },
    { number: 13.8, unit: '元', value: 0, title: '我的账单', desc: '最近支付' },
  ],
  //
  page: 2,
  imgs: [
    { url: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg' },
    { url: 'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg' },
    { url: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg' },
    { url: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg' },
  ],

  activities: [
    { icon: AVip, title: '天天赚钱', size: '30', value: '红包' },
    { icon: AMianFei, title: '免费抽奖', size: '30', value: '现金' },
    { icon: AZhibo, title: '贪吃蛇', size: '30' },
    { icon: AReDian, title: '免费领鸡蛋', size: '30' },
    { icon: AMiaoSha, title: '限时秒杀', size: '30' },
    { icon: ADaTi, title: '答题领红包', size: '30' },
    { icon: AQuan, title: '免费看小说', size: '30' },
    { icon: AYinYue, title: '锦鲤迎红包', size: '30' },
    { icon: ACherry, title: '保卫果园', size: '30' },
  ],
  activities2: [
    { icon: 'a-iconshehuijiuzhu', title: '合作与招聘', color: '#ff5000', size: '28' },
    { icon: 'a-iconliudongrenkou', title: '团长招募', color: '#ff5000', size: '28' },
    { icon: 'a-iconshengtaihuanbao', title: '充电宝加盟', color: '#ff5000', size: '28' },
    { icon: 'a-iconcanyin', title: '赚佣金', color: '#ff5000', size: '28' },
    { icon: 'a-iconchengshitizhengchanyeyuanqushubeifen', title: '企业服务', color: '#ff5000', size: '28' },
    { icon: 'a-iconbangongchangsuo', title: '我的店铺', color: '#ff5000', size: '28' },
    { icon: 'a-iconshengchanshuishou', title: '借钱', color: '#ff5000', size: '28', value: 'HOT' },
    { icon: 'a-iconbieshu', title: '民宿入住', color: '#ff5000', size: '28' },
    { icon: 'a-icongongyuan', title: '公益', color: '#ff5000', size: '28' },
    { icon: 'a-iconguishangqiye', title: '规则中心', color: '#ff5000', size: '28' },
  ],
});

// // 获取手机号
// function getPhoneNumber(e: any) {
//   console.log(e.detail.code);
// }
</script>
