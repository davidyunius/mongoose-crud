const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionsSchema = new Schema({
    member: { type: Schema.Types.ObjectId, ref: 'Customer'},
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{ type: Schema.Types.ObjectId, ref: 'Books' }]
})

module.exports = mongoose.model('Transactions', transactionsSchema)