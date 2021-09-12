const mongoose = require('mongoose')
const {Schema} = mongoose;
const commentSchema = new Schema({

    author:{
        name:String,
        id:{
            type: Schema.Types.ObjectId,
            ref:'user'
        }
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    content:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('comment',commentSchema);