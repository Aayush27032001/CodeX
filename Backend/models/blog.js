const mongoose = require('mongoose')
const {Schema} = mongoose
const blogSchema = new Schema({

    title:{
        type : String,
        required:true 
    },
    content:{
        type : String,
        required:true 
    },
    thumbnail:{
        type : String,
        required:true 
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('blog',blogSchema)
