/* eslint-disable react-hooks/rules-of-hooks */
import { createApp } from 'vue';
import Taro from '@tarojs/taro';

import { useApp, useAuth, store } from '@/stores';

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
    Taro.login({
      async success(res) {
        const { code } = res;
        if (!code) {
          console.log('獲取CODE失敗！' + res.errMsg);
          return;
        }
        //发起网络请求
        const loginRes = await Taro.request({
          url: 'https://api.imcoco.top/blog',
          data: {
            code: res.code,
          },
        });
        console.log('登录接口返回数据：', loginRes);
      },
    });
  },
});

App.use(store);

const auth = useAuth();
const app = useApp();

//
const token = Taro.getStorageSync('token');

if (!token) {
  auth.logout();
} else {
  app.startScreenLoading();
  // MOCK login
  setTimeout(() => {
    auth.setUserInfo({
      nickName: 'xmiles/singcl',
      avatarUrl:
        'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png',
    });
    auth.login();
    app.cancelScreenLoading();
  }, 500);
}

export default App;
