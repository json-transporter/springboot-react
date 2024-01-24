const { createProxyMiddleware } = require('http-proxy-middelware');

module.exports = function(app) {
    app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:8080', //서버 URL or localhost:설정한 포트번호
        changeOrigin: true,
        })
    );
    app.listen(3000);
};