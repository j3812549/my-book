let mongoose = require('mongoose')
let Schema = mongoose.Schema

let CommentsSchema = new Schema({
    comments_uid: String,
    title_uid: String,
    comments_content: String,
    user_uid: String,
    comments_status: Number
})

module.exports = CommentsSchema
