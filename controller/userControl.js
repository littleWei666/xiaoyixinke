/**
 * 用户增删改查的操作
 */
//导入userinfofind对象
const { userinfofind } = require('../modles/user/userinfo')
const crud = require('./CrudUtils/index')
// const userLogin = async (ctx,next) =>{
//     const {
//         username ="",
//         password =""
//     } = ctx.body.body
//     await crud.
// }
/**
 * 添加用户的操作
 * 方法名AddUser
 */
const AddUser = async (ctx, next) => {
    const {
        username = "",
        password = "",
        age = "",
        sex = "",
        address = "",
        email = "",
        phone = ""
    } = ctx.request.body
    await crud.createOne(userinfofind, ctx, {
        username,
        password,
        age,
        sex,
        address,
        email,
        phone
    })
}

/**
 * 修改用户信息接口
 * 方法名：UpdateUser
 */
const UpdateUser = async (ctx, next) => {
    const updateInfo = ctx.request.body
    await crud.updateOne(userinfofind, ctx,
        { _id: updateInfo._id },
        {
            username: updateInfo.username,
            password: updateInfo.password
        })
}

/**
 * 删除用户接口
 * 方法名：DelUser
 */
const DelUser = async (ctx, next) => {
    let { _id } = ctx.request.body
    await crud.deleteOne(userinfofind, ctx, { _id })
}

/**
 * 查询所有用户接口，方法名：GetUser
 * @param {*} ctx 上下文对象
 * @param {*} next 
 */
const GetUser = async (ctx, next) => {
    await crud.findAll(userinfofind, ctx, null)
}
/**
 * 查询单个用户
 * 方法名：GetUser/id
 */
const GetUserOne = async (ctx, next) => {
    await crud.findOne(userinfofind, ctx, { _id: ctx.params.id })
}
/**
 * 导出方法
 */
module.exports = {
    AddUser, UpdateUser, DelUser, GetUser, GetUserOne
}