
/**
 * 封装一个所有项查询操作
 * @param {*} model model为一个模型对象
 * 关于model的解释：如果model是一个用户对象，说白了就是一个数据库中的集合
 * @param {*} ctx ctx是传入的上下文对象
 * @param {*} conditions conditions是查询所需要的条件
 * @returns ES6只有单个的return语法格式
 */
const findAll = (model, ctx, conditions) => (
    model.find(conditions).then((rel) => {
        ctx.body = {
            code:200,
            data: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            message: "服务端异常",
        }
        console.log(err)
    })
)


/**
 * 查询单个项目所用到的公共方法
 * @param {*} model model为一个模型对象
 * 关于model的解释：如果model是一个用户对象，说白了就是一个数据库中的集合
 * @param {*} ctx ctx是传入的上下文对象
 * @param {*} conditions conditions是查询所需要的条件
 * 例如：{_id:ctx.params.id}就是以id为path参数的条件查询
 * @returns 
 */
const findOne = (model,ctx,conditions) => (
        model.findOne(conditions).then((rel) => { 
        ctx.body = {
            code:200,
            data: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            message: "服务端异常",
        }
        console.log(err)
    })
)

/**
 * 删除单个信息
 * @param {*} model 
 * @param {*} ctx 
 * @param {*} conditions 条件
 * @returns 
 */
const deleteOne = (model,ctx,conditions) => (
    model.findOneAndDelete(conditions).then((rel) =>{
        ctx.body ={
            code:200,
          data:rel
        }
      }).catch(err =>{
        ctx.body = {
          code:400,
          message:"服务端异常",
        }
        console.log(err)
      })
)
/**
 * 更新或者修改单个信息
 * @param {*} model 模型对象
 * @param {*} ctx 上下文对象
 * @param {*} conditions 更新所需要的条件
 * @param {*} params 参数
 * @returns 
 */
const updateOne =(model,ctx,conditions,params) =>(
    model.updateOne(conditions,params).then((rel) =>{
        ctx.body ={
          code:200,
          message:"修改更新成功",
          result:rel
        }
      }).catch(err =>{
        ctx.body = {
          code:400,
          message:"服务端异常",
        }
        console.log(err)
      })
)


/**
 * 
 * @param {*} model 
 * @param {*} ctx 
 * @param {*} params 参数
 */
const createOne = (model,ctx,params) =>(
    model.create(params).then((rel) => {
        if (rel) {
            ctx.body = {
                code: 200,
                message: "添加成功",
                data: rel
            }
        } else {
            ctx.body = {
                code: 300,
                message: "添加失败",
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            message: "服务端异常",
        }
        console.log(err)
    })
)

const userLogin = (model,ctx,params) =>{
    
}

module.exports = {
    findAll,findOne,deleteOne,updateOne,createOne
}