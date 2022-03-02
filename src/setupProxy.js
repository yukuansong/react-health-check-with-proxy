const { createProxyMiddleware } = require('http-proxy-middleware');
console.log("hello=====");
module.exports = function(app) {
  app.use(
    '/example',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
  );
};