/* eslint-disable react-hooks/rules-of-hooks */
import { createApp } from 'vue';
// import Taro from '@tarojs/taro';
import components from '@/components';
import '@/services/http';
import { /* useApp, useAuth, */ store } from '@/stores';
import App from './App.vue';

const app = createApp(App);

app.use(components);
app.use(store);

// const auth = useAuth();
// const app = useApp();

export default app;
