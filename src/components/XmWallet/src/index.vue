<template>
  <view :class="styles['wrapper']">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'XmWallet',
});
</script>

<script lang="ts" setup>
import styles from './xmWallet.module.styl';
</script>
