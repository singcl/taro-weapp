import type { Component } from 'vue';
import XmTips from './XmTips';
import XmForm from './XmForm';
import XmSimpleCard from './XmSimpleCard';
import XmWallet from './XmWallet';
import XmActivities from './XmActivities';

// 需要注册为全局组件的组件放在这里
const GComponents: Component[] = [XmTips, XmForm, XmSimpleCard, XmWallet, XmActivities];

export default GComponents;
export { XmTips, XmForm, XmSimpleCard, XmWallet, XmActivities };
