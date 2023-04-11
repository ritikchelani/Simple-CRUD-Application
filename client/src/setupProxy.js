
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:5000', // replace 6000 with your required port
      changeOrigin: true,
    })
  );
};