// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  root: true,
  // lint vue 文件
  // eslint-config-taro配置包中没有引入依赖eslint-plugin-vue
  // 所以需要项目安装eslint-plugin-vue
  extends: ["taro/vue3"],
  rules: { semi: ["error", "never"] },
  // lint js?(x) ts?(x)文件
  // eslint-config-taro 没有引入相关依赖
  // 需要项目单独安装：
  // "eslint-plugin-import": "^2.26.0",
  // "eslint-plugin-react": "^7.30.0",
  // "eslint-plugin-react-hooks": "^4.5.0",
  overrides: [{ files: ["**/*.js?(x)", "**/*.ts?(x)"], extends: ["taro"] }],
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
