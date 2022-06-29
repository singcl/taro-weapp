import type { App } from 'vue';
import NutUI from './nutui';
import XmTips from './XmTips';

const components = [XmTips];

export default class XmUI {
  static install(Vue: App<Element> /* options */) {
    // 按需加载nutui
    Vue.use(NutUI);
    // 加载项目公共组件
    components.forEach((component) => {
      Vue.component(component.name || 'anonymous', component);
    });
  }
}

export { XmTips };
