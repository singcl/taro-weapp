import type { App, Component } from 'vue';

export default class XmComponents {
  constructor(private components: Component[]) {}
  //
  install(Vue: App<Element> /* options */) {
    // 加载项目公共组件
    this.components.forEach((component) => {
      Vue.component(component.name || 'anonymous', component);
    });
  }
}
