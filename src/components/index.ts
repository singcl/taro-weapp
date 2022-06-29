import type { App } from 'vue';
import NutUI from './nutui';

import XmComponents from './global_components';
import GComponents from './components';

export default class XmUI {
  static install(Vue: App<Element> /* options */) {
    // 按需加载nutui
    Vue.use(NutUI);
    // 加载项目公共组件
    Vue.use(new XmComponents(GComponents));
  }
}

export * from './components';
