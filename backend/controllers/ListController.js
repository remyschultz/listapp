const ListModel = require('../models/ListModel')

module.exports.getList = async (req, res) => {
    const list = await ListModel.find()
    res.send(list)
}

module.exports.saveList = async (req, res) => {

    const {text} = req.body

    ListModel
        .create({text})
        .then((data) => {
            console.log('Added successfully')
            console.log(data)
            res.send(data)
        })

}

module.exports.updateListItem = async (req, res) => {
    const {_id, text} = req.body
    ListModel
        .findByIdAndUpdate(_id, {text})
        .then(() => {
            res.set(201).send('Updated successfully')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports.deleteListItem = async (req, res) => {
    const {_id} = req.body
    ListModel
        .findByIdAndDelete(_id)
        .then(() => {
            res.set(201).send('Deleted successfully')
        })
        .catch((err) => {
            console.log(err)
        })
}