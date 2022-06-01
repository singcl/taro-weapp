<template>
  <view class="index">
    <Counter />
    <button type="primary">主要按钮</button>
  </view>
</template>

<script>
import './index.styl';
import Counter from '../../components/Counter.vue';

export default {
  name: 'XmIndex',
  components: {
    Counter,
  },
};
</script>
