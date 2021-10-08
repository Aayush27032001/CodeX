const mongoose = require('mongoose')
const { Schema } = mongoose
const blogSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    content: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref:'comment'
        }
    ],
    createdAt: {
        type: String,
        default: Date
    }
})

module.exports = mongoose.model('blog', blogSchema)
