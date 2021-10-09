
const mongoose = require('mongoose')
const {Schema} = mongoose

const topicSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('topic',topicSchema)
