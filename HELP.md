## Component is not found in path "custom-wrapper"...

### 可能的解决方案
1. 引入的组件名和组件中定义的`name`属性保持一致
2. 引入组件使用相对路径，不用`@` alias
3. webpack alias 中配置多种别名，不止配置 `@`一个

```js
// 
{ alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/stores': path.resolve(__dirname, '..', 'src/stores'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/package': path.resolve(__dirname, '..', 'package.json'),
    '@/project': path.resolve(__dirname, '..', 'project.config.json'),
    '@': path.resolve(__dirname, '..', 'src'),
  }}
```
