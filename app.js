const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// const {allowCors} = require('./cors/cors')
const cors = require('koa2-cors')
// const corsOptions = {
//   origin:'http://localhost:9528',
//   optionsSuccessStatus: 200 
// }
//引入MongoDb的连接配置信息
const mongoConnect = require('./db_collection/index')
//启动数据库
mongoConnect()

/**
 * 路由模块的引入
 */
const index = require('./routes/index')
const users = require('./routes/users/index')
const upload = require('./routes/upload/index')
const auth = require('./routes/auth/index')
const bridge = require('./routes/infoApi/bridgeInfo/index')
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
// app.use(cors())

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(upload.routes() ,upload.allowedMethods())
app.use(auth.routes() ,auth.allowedMethods())
app.use(bridge.routes() ,bridge.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
