<template>
  <view :class="styles['wrapper']">
    <numberical number="12.3" unit="元" />
    <text>{{ title ?? '-' }}</text>
    <text>{{ desc ?? '-' }}</text>
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
  number?: number;
  unit?: string;
  title?: string;
  desc?: string;
}
defineProps<Props>();
</script>
