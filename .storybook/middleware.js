const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function expressMiddleware (router) {
  router.use('/master', createProxyMiddleware({
    target: 'http://localhost:9071/',
    changeOrigin: true
  }))
}