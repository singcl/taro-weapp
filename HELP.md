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

## The '.husky/pre-commit' hook was ignored because it's not set as executable.

### 可能的解决方案

https://stackoverflow.com/questions/8598639/why-is-my-git-pre-commit-hook-not-executable-by-default

```sh
# 亲测可行
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

```sh
Because files are not executable by default; they must be set to be executable.

The sample files from a git init are all executable; if it's copied or renamed to a non-sample file, it will retain the original file's x flag.
```
