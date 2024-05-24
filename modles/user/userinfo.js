const mongoose = require('mongoose')

//创建数据库中的集合对象结构
const userinfoSch = new mongoose.Schema({
    username:String,
    password:String,
    address:String,
    sex:String,
    age:Number,
    email:String,
    phone:Number
})


const userinfofind = mongoose.model('userinfofind',userinfoSch)


module.exports ={
    userinfofind
}