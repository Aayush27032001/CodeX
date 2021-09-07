const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    joinedAt :{
        type : Date,
        default:Date.now

    }
})

module.exports = mongoose.model('user',userSchema);