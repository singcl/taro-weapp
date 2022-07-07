![ci](https://img.shields.io/github/workflow/status/singcl/taro-weapp/ci?label=ci&logo=github)
![nycrc config on Github](https://img.shields.io/nycrc/singcl/taro-weapp?color=blue&config=.nycrc&label=nyc%20covrage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

# taro-weapp

`taro-weapp`是一款功能完备的基于 taro3.x，Vue3.x 开发的 wonderful 小程序！

小程序后端服务[gin-taro-api](https://github.com/singcl/gin-taro-api)基于`go 1.18+`编写。

## Preview

- [ ] 个人中心

紧锣密鼓地开发中 💥...

|                 个人中心                  |                  个人中心                  |
| :---------------------------------------: | :----------------------------------------: |
| ![mine-center](./preview/mine-center.jpg) | ![mine-center](./preview/mine-center2.jpg) |

## Eslint

项目配置完整的 eslint 检查，prettier 格式化规则，并且相互兼容。

```js
// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  root: true,

  extends: [
    // lint vue 文件
    // eslint-config-taro配置包中没有引入依赖eslint-plugin-vue
    // 所以需要项目安装eslint-plugin-vue
    'taro/vue3',
    // eslint 集成prettier 规则，
    // 需要先安装
    // eslint-config-prettier
    // eslint-plugin-prettier
    // 1. disabled掉eslint中和prettier想冲突的规则
    // 2. 实时以eslint 提示的方式显示prettier规则
    // @see https://github.com/prettier/eslint-plugin-prettier
    'plugin:prettier/recommended',
  ],
  rules: {},
  // 方式一：
  // lint js?(x) ts?(x)文件
  // eslint-config-taro 没有引入相关依赖
  // 需要项目单独安装：
  // "eslint-plugin-import": "^2.26.0",
  // "eslint-plugin-react": "^7.30.0",
  // "eslint-plugin-react-hooks": "^4.5.0",
  // glob functionally: https://github.com/isaacs/node-glob
  overrides: [{ files: ['**/*.js?(x)', '**/*.ts?(x)'], extends: ['taro'] }],
  // 方式二：
  // 不使用taro配置包，自定义lint ts文件
  // overrides: [
  //   {
  //     files: ["src/**/*.ts"],
  //     parserOptions: {
  //       tsconfigRootDir: __dirname,
  //       project: ["./tsconfig.json"],
  //       extraFileExtensions: [".vue"],
  //     },
  //     parser: "@typescript-eslint/parser",
  //     plugins: ["@typescript-eslint"],
  //     extends: [
  //       "eslint:recommended",
  //       "plugin:@typescript-eslint/recommended",
  //       "plugin:@typescript-eslint/recommended-requiring-type-checking",
  //     ],
  //     excludedFiles: "*.test.ts",
  //   },
  // ],
};
```

## Stylelint

项目配置完整的 Stylelint 检查。

```js
// @see https://www.npmjs.com/package/stylelint-stylus
// @see https://stylelint.io/user-guide/configure/
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    // @see https://www.npmjs.com/package/stylelint-stylus
    'stylelint-stylus/standard',
  ],
  rules: {
    // override/add rules settings here, such as:
    // "stylus/declaration-colon": "never"
  },
};
```

## Commitizen

代码提交前 commit message 规范检查与交互式设置

### pre-commit

代码提交前 eslint，校验， volar 编译类型校验

```sh
#!/usr/bin/env sh
# @see #!/bin/bash 和 #!/usr/bin/env bash 的区别
. "$(dirname -- "$0")/_/husky.sh"

echo "😊😊 eslint..."
npm run eslint
echo "✨✨Eslint Success!"

echo "😊😊 Vue 3 command line Type-Checking tool base on IDE plugin Volar."
npm run tsc
echo "✨✨Type-Checking Success!"

echo "😊😊 Stylelint..."
npm run stylelint
echo "✨✨Stylelint-Checking Success!"

```

### commitizen

npm run cz 代替 git commit 在提交前交互式引导输入 commit message

```sh
npm run cz
```

### changelog

自动生成 changelog 和更新版本号

```sh
npm run release
```

## CHANGELOG

[CHANGELOG](./CHANGELOG.md) is here. current version [0.1.0-alpha.6](https://github.com/singcl/taro/compare/v0.1.0-alpha.5...v0.1.0-alpha.6) (2022-07-07).

[commitizen](https://github.com/commitizen/cz-cli),[husky](https://github.com/typicode/husky),[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog),[standard-version](https://github.com/conventional-changelog/standard-version) is very usefull for this project quality.

## NUTUI

[使用 nutui 组件库](https://taro-docs.jd.com/taro/docs/nutui)

## Test

Test Resource and [coverage](https://github.com/bcoe/c8/blob/main/.github/workflows/release-please.yml)

[Vue3 Test Guide](https://staging-cn.vuejs.org/guide/scaling-up/testing.html#component-testing)

[Vitest](https://cn.vitest.dev/guide/ide.html#vs-code) Vitest 需要 Vite >=v2.7.10 和 Node >=v14

[vite](https://vitejs.cn/guide/#command-line-interface)

## Inspired

inspired by [taro-vue3](https://github.com/wlllyfor/taro-vue3.git)
