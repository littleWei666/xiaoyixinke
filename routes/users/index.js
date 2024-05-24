const router = require('koa-router')()
/**
 * 对用户相关的增删改查接口
 */
//引入models模型对象并进行结构
const { userinfofind } = require('../../modles/user/userinfo')
const { AddUser, UpdateUser, DelUser, GetUser, GetUserOne } = require('../../controller/userControl')
router.prefix('/userApi')

//添加用户的接口
router.post('/AddUser', AddUser)

//修改(更新)用户的接口
router.post('/UpdateUser', UpdateUser)

//删除用户的接口
router.post('/DelUser', DelUser)

//查询所有用户的接口
router.get('/GetUser', GetUser)
//查询单个用户的接口
router.get('/GetUser/:id', GetUserOne)

module.exports = router
