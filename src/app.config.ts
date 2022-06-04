export default {
  pages: ['pages/index/index', 'pages/mine/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#d81e06',
    borderStyle: 'black',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '首页',
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '个人中心',
      },
    ],
  },
};
