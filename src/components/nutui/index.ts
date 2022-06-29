import type { App } from 'vue';
import { Button, Cell, Icon } from '@nutui/nutui-taro';
// 定制化主题必须使用 scss
import '@nutui/nutui-taro/dist/styles/themes/default.scss';

const components = [Button, Cell, Icon];

export default class NutUI {
  static install(Vue: App<Element> /* options */) {
    components.forEach((component) => Vue.use(component));
  }
}
