/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue()],
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
