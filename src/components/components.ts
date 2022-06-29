import type { Component } from 'vue';
import XmTips from './XmTips';
import XmForm from './XmForm';

// 需要注册为全局组件的组件放在这里
const GComponents: Component[] = [XmTips, XmForm];

export default GComponents;
export { XmTips, XmForm };