export default defineAppConfig({
  pages: ['pages/index/index', 'pages/found/index', 'pages/coin/index', 'pages/mine/index'],
  subPackages: [
    {
      root: 'pages/mineSubPackages/',
      pages: ['pages/userSettings/index'],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#1c1c1c',
    selectedColor: '#1c1c1c',
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
        pagePath: 'pages/found/index',
        iconPath: 'assets/icons/found_default.png',
        selectedIconPath: 'assets/icons/found_selected.png',
        text: '发现',
      },
      {
        pagePath: 'pages/coin/index',
        iconPath: 'assets/icons/coin_default.png',
        selectedIconPath: 'assets/icons/coin_selected.png',
        text: '赚钱',
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
