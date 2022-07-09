import type { App } from 'vue';
// 按需加载时候不用导入整个主题，再config/index.js中已经导入了主题变量
// sass: {
//   data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
// },
// 定制化主题必须使用 scss
// import '@nutui/nutui-taro/dist/styles/themes/default.scss';
import {
  Button,
  Cell,
  Icon,
  Form,
  FormItem,
  CellGroup,
  TextArea,
  Avatar,
  Badge,
  Swiper,
  SwiperItem,
} from '@nutui/nutui-taro';

const components = [Button, Cell, Icon, Form, FormItem, CellGroup, TextArea, Avatar, Badge, Swiper, SwiperItem];

export default class NutUI {
  static install(Vue: App<Element> /* options */) {
    components.forEach((component) => Vue.use(component));
  }
}
