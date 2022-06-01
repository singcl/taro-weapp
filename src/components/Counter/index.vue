<template>
  <view>
    <text :class="styles['title']">{{ counter.count }}</text>
    <button type="warn" :class="styles['button']" @tap="onAdd">ADD</button>
  </view>
</template>

<script>
import { useCounterStore } from '@/stores/counter';
// import { reactive, computed } from 'vue';
import styles from './index.module.styl';

export default {
  name: 'XmCounter',
  setup() {
    const counter = useCounterStore();

    const onAdd = () => {
      counter.count++;

      // with autocompletion ✨
      // counter.$patch({count: counter.count + 1})

      // or using an action instead
      // counter.increment()
    };

    return {
      counter,
      onAdd,
      styles,
    };
  },
};
</script>
