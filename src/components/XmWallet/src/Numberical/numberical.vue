<template>
  <view :class="styles['wrapper']">
    <nut-badge :value="value ?? 0" :max="max ?? 99" right="10" :class="styles['nut-badge']">
      <view :class="styles['numberical']">
        <text :class="styles['numberical-num']">{{ number ?? 0.0 }}</text>
        <text :class="styles['numberical-unit']">{{ unit ?? '元' }}</text>
      </view>
    </nut-badge>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'XmNumberical',
});
</script>

<script setup lang="ts">
import styles from './numberical.module.styl';
interface Props {
  number?: number;
  unit?: string;
  value?: number | string;
  max?: number;
}
defineProps<Props>();
</script>
