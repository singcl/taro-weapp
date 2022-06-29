import XmTips from './XmTips';

const components = [XmTips];

export default class XmilesUI {
  static install(Vue /* options */) {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  }
}

export { XmTips };
