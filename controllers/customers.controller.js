const Customers = require('../models/customers.model')

module.exports = {
    viewCust(req, res) {
        Customers.find().then(custData => {
            res.status(200).json({
                message: 'Customer data found!',
                custData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    addCust(req, res) {
        Customers.create({
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }).then(custData => {
            res.status(201).json({
                message: 'Customer data successfully added!',
                custData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    updateCust(req, res) {
        Customers.update({
            _id: req.params.id
        }, {
            $set: {
                name: req.body.name,
                memberid: req.body.memberid,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.phone,
                updatedAt: Date.now
            }
            }, { where: { _id: req.params.id } }).then(custData => {
                res.status(200).json({
                    message: 'Customer data successfully updated!',
                    custData
                })
            }).catch(err => {
                res.status(500).json({
                    message: err
                })
            })
    },
    deleteCust(req, res) {
        Customers.remove({
            _id: req.params.id
        }).then(custData => {
            res.status(200).json({
                message: 'Data deleted!',
                custData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    }
}