export default defineAppConfig({
  pages: ['pages/index/index', 'pages/functional/index', 'pages/mine/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#1afa29',
    borderStyle: 'black',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'assets/icons/home_default.png',
        selectedIconPath: 'assets/icons/home_selected.png',
        text: '首页',
      },
      {
        pagePath: 'pages/functional/index',
        iconPath: 'assets/icons/settings_default.png',
        selectedIconPath: 'assets/icons/settings_selected.png',
        text: '功能',
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: 'assets/icons/mine_default.png',
        selectedIconPath: 'assets/icons/mine_selected.png',
        text: '我的',
      },
    ],
  },
});
