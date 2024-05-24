const mongoose = require('mongoose')

//连接数据库的方法
module.exports = () =>{
    mongoose.connect('mongodb://xiaoyixinke:xiaoyixinke@140.143.182.167:27017/xiaoyixinke',{useNewUrlParser:true, useUnifiedTopology: true})
    .then(() =>{
        console.log("数据库连接成功！")
    }).catch((err) =>{
        console.log("数据库连接失败",err)
    })
}

// module.exports()


