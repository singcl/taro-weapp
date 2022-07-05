<template>
  <view :class="styles['wrapper']">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'XmSimpleCard',
});
</script>

<script lang="ts" setup>
import styles from './xmSimpleCard.module.styl';
// TODO its value not never used
</script>
