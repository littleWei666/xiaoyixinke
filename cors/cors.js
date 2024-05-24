/**
 * 解决跨域请求
 * 
 
 */
const cors = require('koa2-cors')
const allowCors = (options) => {
    const defaultOptions = {
        origin: '*', // 默认允许任何源
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH', // 默认允许的 HTTP 方法
        allowHeaders: 'Content-Type, Authorization, Accept' // 默认允许的 HTTP 请求头
    }
    // 合并默认选项和传入的选项
    const finalOptions = { ...defaultOptions, ...options };

    // 返回 CORS 中间件
    return cors(finalOptions);

}

module.exports = {
    allowCors
};
