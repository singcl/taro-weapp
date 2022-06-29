/* eslint-disable react-hooks/rules-of-hooks */
import { createApp } from 'vue';
import { Button, Cell, Icon } from '@nutui/nutui-taro';
// 定制化主题必须使用 scss
import '@nutui/nutui-taro/dist/styles/themes/default.scss';
// import Taro from '@tarojs/taro';

import '@/services/http';
import { /* useApp, useAuth, */ store } from '@/stores';
import App from './App.vue';

import './app.styl';

const app = createApp(App);

app.use(store).use(Button).use(Cell).use(Icon);

// const auth = useAuth();
// const app = useApp();

export default app;
