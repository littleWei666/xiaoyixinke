const mongoose = require('mongoose')

const bridgeInfosSch =new mongoose.Schema(
    {
        bridgeName: String,
        bridgeAdress: String,
        bridgeMain: String,
        bridgeMainOther: [String],
        createTime: Date,
        bridgeStatus: String,
        useAge: Number,
        bridgeOther: [String],
    }
)
 const bridgeInfos = mongoose.model('bridgeInfos',bridgeInfosSch)

 module.exports = {
    bridgeInfos
 }