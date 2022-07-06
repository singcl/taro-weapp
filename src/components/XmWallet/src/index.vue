<template>
  <view :class="styles['wrapper']">
    <numberical :number="number" :unit="unit" :max="max" :value="value" />
    <view :class="styles['descriptions']">
      <text>{{ title ?? '-' }}</text>
      <text>{{ desc ?? '-' }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'XmWallet',
});
</script>

<script lang="ts" setup>
import Numberical from './Numberical/numberical.vue';
import styles from './xmWallet.module.styl';

interface Props {
  value?: number | string;
  max?: number;
  number?: number;
  unit?: string;
  title?: string;
  desc?: string;
}
defineProps<Props>();
</script>
