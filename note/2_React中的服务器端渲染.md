# React 中的服务器端渲染

本章将借助 Node.js，Webpack 等工具的帮助，带大家实现一个非常基础的基于 React.js 技术栈的服务器端渲染模型，过程中还会讲解虚拟 DOM 与服务器端渲染的内在联系。

## 配置 webpack

## 虚拟 DOM

虚拟 DOM 是真实 DOM 的一个 js 对象映射。能够在客户端渲染时提升渲染性能，同时在服务端渲染时，方便直接输出对应 HTML。

## ReactDom.renderToString(\<ReactElement />)

能够将 ReactElement 转换为一段 html 代码，但是合成时间并不会被转换。
