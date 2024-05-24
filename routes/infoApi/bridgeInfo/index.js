const router = require("koa-router")();
const {addBridge,updateBridge,getBridge,getBridgeOne,delBridge} = require('../../../controller/bridgeControl')

router.prefix('/bridgeInfo')
//添加桥梁信息的接口
router.post('/addBridge', addBridge)

//修改(更新)桥梁信息的接口
router.post('/updateBridge', updateBridge)

//删除单个桥梁信息的接口的接口
router.post('/delBridge', delBridge)

//查询所有桥梁信息的接口
router.get('/getBridge', getBridge)
//查询单个桥梁信息的接口
router.get('/getBridge/:id', getBridgeOne)

module.exports = router