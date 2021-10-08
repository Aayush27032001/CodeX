const mongoose = require('mongoose')
const { Schema } = mongoose;
const commentSchema = new Schema({

    author: {
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        username:String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('comment', commentSchema);