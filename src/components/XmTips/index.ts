import type { App } from 'vue';
import XmTips from './src/index.vue';

XmTips.install = function (Vue: App<Element>) {
  Vue.component(XmTips.name || 'anonymous', XmTips);
};

export default XmTips;
