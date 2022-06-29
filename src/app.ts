/* eslint-disable react-hooks/rules-of-hooks */
import { createApp } from 'vue';
import { Button, Cell, Icon } from '@nutui/nutui-taro';
// 定制化主题必须使用 scss
import '@nutui/nutui-taro/dist/styles/themes/default.scss';
// import Taro from '@tarojs/taro';
import '@/services/http';
import { /* useApp, useAuth, */ store } from '@/stores';
import API from '@/api';

import './app.styl';

const App = createApp({
  onShow(options) {
    //
    console.log('----', options);
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
  //
  onLaunch() {
    // 登录
    API.auth.TaroLogin();
  },
});

App.use(store).use(Button).use(Cell).use(Icon);

// const auth = useAuth();
// const app = useApp();

export default App;
