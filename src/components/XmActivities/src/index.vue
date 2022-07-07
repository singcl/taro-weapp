<template>
  <view :class="styles['wrapper']">
    <view v-for="(acitvity, index) in activities" :key="index" :class="styles['activity']">
      <nut-badge :value="acitvity.value ?? 0" :max="acitvity.max ?? 99" right="10" :class="styles['activity__badge']">
        <nut-icon
          font-class-name="iconfont"
          class-prefix="icon"
          :name="acitvity.icon"
          :size="acitvity.size"
          :color="acitvity.color"
        />
      </nut-badge>
      <text :class="styles['activity__title']">{{ acitvity.title ?? '-' }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'XmActivities',
});
</script>

<script lang="ts" setup>
import styles from './xmActivities.module.styl';

interface Activity {
  value?: number | string;
  max?: number;
  icon?: string;
  size?: number | string;
  color?: string;
  title?: string;
}

interface Props {
  activities: Activity[];
}

defineProps<Props>();
</script>
