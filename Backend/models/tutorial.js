
const mongoose = require('mongoose')
const {Schema} = mongoose

const tutorialSchema = new Schema({

    title:{
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
    thumbnail:String,
    topics:Array
})

module.exports = mongoose.model('tutorial',tutorialSchema)
