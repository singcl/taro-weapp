<template>
  <view class="index">
    <Counter />
    <button type="primary" :class="styles['button-sp-area']">主要按钮</button>
  </view>
</template>

<script>
import styles from './index.module.styl';
import Counter from '@/components/Counter';

export default {
  name: 'XmIndex',
  components: {
    Counter,
  },
  computed: {
    styles: () => styles,
  },
};
</script>
