<template>
  <view :class="styles['wrapper']">
    <nut-badge value="101">
      <view>
        <text>{{ number ?? 0 }}</text>
        <text>{{ unit ?? '-' }}</text>
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
import styles from './numberical.styl';
interface Props {
  number?: number;
  unit?: string;
}
defineProps<Props>();
</script>
