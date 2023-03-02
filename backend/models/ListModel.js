const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
}, 
{
    collection : 'lists' 
})

module.exports = mongoose.model('List', listSchema)