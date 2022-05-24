<template>
  <view class="index">
    <Counter />
  </view>
</template>

<script>
import './index.styl'
import Counter from '../../components/Counter.vue'

export default {
  name: 'Index',
  components: {
    Counter
  }
}
</script>
