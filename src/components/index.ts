import type { App, Component } from 'vue';
import XmTips from './XmTips';

const components: Component[] = [XmTips];

export default class XmilesUI {
  static install(Vue: App<Element> /* options */) {
    components.forEach((component) => {
      Vue.component(component.name || 'anonymous', component);
    });
  }
}

export { XmTips };
