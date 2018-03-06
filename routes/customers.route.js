const express = require('express');
const router = express.Router();
const customers = require('../controllers/customers.controller')

router
    .get('/list', customers.viewCust)
    .post('/add', customers.addCust)
    .delete('/delete/:id', customers.deleteCust)
    .patch('/update/:id', customers.updateCust)

module.exports = router