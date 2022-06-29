import type { App } from 'vue';
// 定制化主题必须使用 scss
import '@nutui/nutui-taro/dist/styles/themes/default.scss';
import {
  Button,
  Cell,
  Icon,
  Form,
  FormItem,
  CellGroup,
  TextArea,
  Avatar,
} from '@nutui/nutui-taro';

const components = [
  Button,
  Cell,
  Icon,
  Form,
  FormItem,
  CellGroup,
  TextArea,
  Avatar,
];

export default class NutUI {
  static install(Vue: App<Element> /* options */) {
    components.forEach((component) => Vue.use(component));
  }
}
