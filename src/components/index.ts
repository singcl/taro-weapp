import type { App } from 'vue';
import XmTips from './XmTips';

const components = [XmTips];

export default class XmilesUI {
  static install(Vue: App<Element> /* options */) {
    components.forEach((component) => {
      Vue.component(component.name || 'anonymous', component);
    });
  }
}

export { XmTips };
