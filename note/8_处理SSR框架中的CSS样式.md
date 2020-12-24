# 处理 SSR 框架中的 CSS 样式

本章将讲解在 SSR 框架中，组件和页面中 CSS 样式的处理方案，在这章中，我们还会应用高阶组件等设计技巧，提高代码复用性。

## 如何支持 CSS 样式修饰

- 安装 `css-loader`、`style-loaders` 实现 CSS 模块化
- 服务端 需要安装 `isomorphic-style-loader` 替代 `style-loader`

  - 出现如下问题
  - `isomorphic-style-loader` 与 `css_loader@4+` 不兼容，`style._getCss()` 方法无法返回 CSS 字符串，且无法返回 className。
  - `isomorphic-style-loader` 对应 `css_loader@3.6.x` 是可以使用的，能够正常返回。
  - 使用`critical-style-loader`代替，但是需要客服端 `style-loader` 支持 `transform` ，但已经重构删除了，此路不通

- 多组件样式
