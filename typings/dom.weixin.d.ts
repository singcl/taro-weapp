// generated by unplugin-vue-components
// We suggest you to commit this file into source control
// Read more: https://github.com/vuejs/core/pull/3399
import type { ButtonHTMLAttributes } from '@vue/runtime-dom';

interface WeixinButtonHTMLAttributes extends Omit<ButtonHTMLAttributes, 'type'> {
  type?: ButtonHTMLAttributes['type'] | 'primary' | 'warn';
  openType?: string;
  plain?: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: WeixinButtonHTMLAttributes;
    }
  }
}

export {};
