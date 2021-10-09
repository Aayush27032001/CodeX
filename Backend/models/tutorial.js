
const mongoose = require('mongoose')
const {Schema} = mongoose

const tutorialSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    category:{
        type:String,
        required:true
    },
    topics:[
        {
            type:Schema.Types.ObjectId,
            ref:'topic'
        }
    ]
})

module.exports = mongoose.model('tutorial',tutorialSchema)
