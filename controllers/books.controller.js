const Books = require('../models/books.model')

module.exports = {
    viewBook (req, res) {
        Books.find().then(booksData => {
            res.status(200).json({
                message: 'Book data found!',
                booksData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    addBook (req, res) {
        Books.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }).then(booksData => {
            res.status(201).json({
                message: 'Book data successfully added!',
                booksData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    updateBook (req, res) {
        Books.update({
            _id: req.params.id
        }, {$set:{
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock,
            updatedAt: Date.now
        }}, {where: {_id: req.params.id}}).then(booksData => {
            res.status(200).json({
                message: 'Book data successfully updated!',
                booksData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    deleteBook (req, res) {
        Books.remove({
            _id: req.params.id
        }).then(booksData => {
            res.status(200).json({
                message: 'Data deleted!',
                booksData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    }
}