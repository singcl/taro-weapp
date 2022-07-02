<template>
  <view>
    <text :class="styles['title']">{{ counter.count }}</text>
    <!-- // @tarojs/plugin-html 小程序支持使用html标签和html5事件！！ -->
    <!-- // https://taro-docs.jd.com/taro/docs/use-h5 -->
    <button type="warn" :class="styles['button']" @click="onAdd">INCREMENT</button>
    <button type="primary" :plain="true" :class="styles['button']" @click="onDecrement">DECREMENT</button>
  </view>
</template>

<script lang="ts">
import { useCounterStore } from '@/stores/counter';
import { defineComponent } from 'vue';
// import { reactive, computed } from 'vue';
import styles from './index.module.styl';

export default defineComponent({
  name: 'XmTips',
  setup() {
    const counter = useCounterStore();

    const onAdd = () => {
      counter.count++;

      // with autocompletion ✨
      // counter.$patch({count: counter.count + 1})

      // or using an action instead
      // counter.increment()
    };
    const onDecrement = () => {
      // counter.count--;

      // with autocompletion ✨
      // counter.$patch({count: counter.count + 1})

      // or using an action instead
      counter.decrement();
    };

    return {
      counter,
      onAdd,
      onDecrement,
      styles,
    };
  },
});
</script>
