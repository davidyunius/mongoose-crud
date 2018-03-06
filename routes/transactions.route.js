const express = require('express');
const router = express.Router();
const transactions = require('../controllers/transactions.controller')

router
    .get('/list', transactions.viewTrans)
    .post('/add', transactions.addTrans)
    .delete('/delete/:id', transactions.deleteTrans)
    .patch('/update/:id', transactions.updateTrans)

module.exports = router