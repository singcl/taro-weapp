<template>
  <view>
    <text :class="styles['title']">{{ counter.count }}</text>
    <button type="warn" :class="styles['button']" @tap="onAdd">
      INCREMENT
    </button>
    <button
      type="primary"
      :plain="true"
      :class="styles['button']"
      @tap="onDecrement"
    >
      DECREMENT
    </button>
  </view>
</template>

<script lang="ts">
import { useCounterStore } from '@/stores';
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
};
</script>
