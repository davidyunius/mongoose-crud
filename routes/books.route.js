const express = require('express');
const router = express.Router();
const books = require('../controllers/books.controller')

router
    .get('/list', books.viewBook)
    .post('/add', books.addBook)
    .delete('/delete/:id', books.deleteBook)
    .patch('/update/:id', books.updateBook)

module.exports = router