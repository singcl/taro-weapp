import type { App } from 'vue';
import XmComponent from './src/index.vue';

XmComponent.install = function (Vue: App<Element>) {
  Vue.component(XmComponent.name || 'anonymous', XmComponent);
};

export default XmComponent;
