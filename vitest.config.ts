/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { Evaluator } from 'stylus';

// aliases
const aliases = {
  '@/': `${path.resolve(__dirname, 'src')}/`,
  '@/styles': `${path.resolve(__dirname, 'src')}/styles`,
};

// ===================================================================
/* TEST FAILED OUTPUT:
src/components/XmWallet/__test__/XmSimpleCard.spec.ts [ src/components/XmWallet/__test__/XmSimpleCard.spec.ts ]
ReferenceError: ~/xmiles/taro-weapp/src/components/XmWallet/src/xmWallet.module.styl:1:9
   1| @import "~@/styles/theme/vars"
--------------^
   2|
   3| .wrapper
   4|   position relative

aliases is not defined */

//  RESOLUTION:
//  @ see https://github.com/vuejs/component-compiler-utils/issues/49
const visitImport = Evaluator.prototype.visitImport;
Evaluator.prototype.visitImport = function (imported) {
  const path2 = imported.path.first;

  if (path2.string.startsWith('~')) {
    const alias = Object.keys(aliases).find((entry) => path2.string.startsWith(`~${entry}`));

    if (alias) path2.string = path2.string.substr(1).replace(alias, aliases[alias]);
  }

  return visitImport.call(this, imported);
};

// ===================================================================

export default defineConfig({
  resolve: {
    alias: aliases,
  },
  plugins: [
    vue({
      style: {
        preprocessOptions: {
          stylus: { Evaluator },
        },
      },
    }),
  ],
  test: {
    // 启用类似 jest 的全局测试 API
    globals: true,
    // 使用 happy-dom 模拟 DOM
    // 这需要你安装 happy-dom 作为对等依赖（peer dependency）
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html'],
      // extension: ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx', '.vue'],
      // @see https://github.com/bcoe/c8#checking-for-full-source-coverage-using---all
      all: true,
      src: ['./src'],
    },
  },
});
