const { bridgeInfos } = require('../modles/bridgeInfo/bridgeInfo')
const crud = require('./CrudUtils/index')

const addBridge = async (ctx, next) => {
    const {
        bridgeName = "",
        bridgeAdress = "",
        bridgeMain = "",
        bridgeMainOther = "",
        createTime = "",
        bridgeStatus = "",
        useAge = "",
        bridgeOther = ""
    } = ctx.request.body
    await crud.createOne(bridgeInfos, ctx, {
        bridgeName,
        bridgeAdress,
        bridgeMain,
        bridgeMainOther,
        createTime,
        bridgeStatus,
        useAge,
        bridgeOther,
    })
}

/**
 * 修改用户信息接口
 * 方法名：UpdateUser
 */
const updateBridge = async (ctx, next) => {
    const updateInfo = ctx.request.body
    await crud.updateOne(bridgeInfos, ctx,
        { _id: updateInfo._id },
        {
            bridgeName:updateInfo.bridgeName,
            bridgeAdress:updateInfo.bridgeAdress,
            bridgeMain:updateInfo.bridgeMain,
            bridgeMainOther:updateInfo.bridgeMainOther,
            createTime:updateInfo.createTime,
            bridgeStatus:updateInfo.bridgeStatus,
            useAge:updateInfo.useAge,
            bridgeOther:updateInfo.bridgeOther,
        })
}

/**
 * 删除用户接口
 * 方法名：DelUser
 */
const delBridge = async (ctx, next) => {
    let { _id } = ctx.request.body
    await crud.deleteOne(bridgeInfos, ctx, { _id })
}

/**
 * 查询所有用户接口，方法名：GetUser
 * @param {*} ctx 上下文对象
 * @param {*} next 
 */
const getBridge = async (ctx, next) => {
    await crud.findAll(bridgeInfos, ctx, null)
}
/**
 * 查询单个用户
 * 方法名：GetUser/id
 */
const getBridgeOne = async (ctx, next) => {
    await crud.findOne(bridgeInfos, ctx, { _id: ctx.params.id })
}
/**
 * 导出方法
 */
module.exports = {
    addBridge, updateBridge, delBridge, getBridge, getBridgeOne
}
