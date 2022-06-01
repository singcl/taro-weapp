import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Taro from '@tarojs/taro'

import './app.styl';

const App = createApp({
  onShow(options) {
    //
    console.log('----', options);
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});
App.use(createPinia());

//
const token = Taro.getStorageSync('token')

export default App;
