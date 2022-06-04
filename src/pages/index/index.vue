<template>
  <view class="index">
    <XmCounter />
    <button type="primary" :class="styles['button-sp-area']">主要按钮</button>
  </view>
</template>

<script>
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
};
</script>
