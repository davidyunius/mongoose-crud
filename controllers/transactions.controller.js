const Transactions = require('../models/transactions.model')

module.exports = {
    viewTrans(req, res) {
        Transactions.find().then(transData => {
            res.status(200).json({
                message: 'Transactions data found!',
                transData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    addTrans(req, res) {
        Transactions.create({
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        }).then(transData => {
            res.status(201).json({
                message: 'Transactions data successfully added!',
                transData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    updateTrans(req, res) {
        Transactions.update({
            _id: req.params.id
        }, {
            $set: {
                member: req.body.member,
                days: req.body.days,
                out_date: req.body.out_date,
                due_date: req.body.due_date,
                in_date: req.body.in_date,
                fine: req.body.fine,
                booklist: req.body.booklist,
                updatedAt: Date.now
            }
            }, { where: { _id: req.params.id } }).then(transData => {
                res.status(200).json({
                    message: 'Transactions data successfully updated!',
                    transData
                })
            }).catch(err => {
                res.status(500).json({
                    message: err
                })
            })
    },
    deleteTrans(req, res) {
        Transactions.remove({
            _id: req.params.id
        }).then(transData => {
            res.status(200).json({
                message: 'Data deleted!',
                transData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    }
}