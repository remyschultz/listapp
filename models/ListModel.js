const mongoose = require('mongoose')

const list = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    collaborators: {
        type: [String],
        required: false
    },
    entries: {
        type: [String],
        required: false
    }
}, 
{
    collection : 'lists' 
})

module.exports = mongoose.model('List', list)

/**
 * {
 *  _id
 *  owner
 *  collaborators[]
 *  entries[]
 *      _id
 *      text
 * }
 */