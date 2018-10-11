[![Twitter](https://img.shields.io/badge/twitter-@qq393464140-blue.svg)](http://twitter.com/qq393464140)
[![Blog](https://img.shields.io/badge/blog-★-ff69b4.svg)](https://www.lixinliang.com)

# dress

在 `iOS App` 中，因为 `ATS`（`App Transport Security`）策略，`webview` 中的网络资源包括 `html`、`css`、`js` 强制使用 `https` 协议。

`http` 的请求将会被拦截。

而媒体资源包括 `image` 等请求则允许发起。（受限于浏览器的跨域安全策略，该 `image` 将会污染画布）

---

## License

MIT
