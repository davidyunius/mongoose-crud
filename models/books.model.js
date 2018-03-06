const mongoose = require('mongoose')
const Schema = mongoose.Schema

const booksSchema = new Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
})

module.exports = mongoose.model('Books', booksSchema)