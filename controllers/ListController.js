const ListModel = require('../models/ListModel')
require('dotenv').config()
const config = require('../config.js')

const getUserId = (req) => {
    if (config.USE_AUTH === true) {
        return req.auth.sub.split('|')[1]
    } else {
        return 'default_user'
    }
}

const getLists = async (req, res) => {
    const userId = getUserId(req)

    const lists = await ListModel
        .find({
            owner: userId
        },
        {
            name: 1,
            _id: 1
        })

    res.send(lists)

}

const getList = async (req, res) => {
    const userId = getUserId(req)
    const {listId} = req.query

    const list = await ListModel
        .findOne({
            owner: userId,
            _id: listId
        })

    res.send(list)

}

const createList = async (req, res) => {
    const userId = getUserId(req)
    const {listName} = req.body

    const list = await ListModel
        .create({
            name: listName,
            owner: userId
        })
            
    getLists(req, res)

}

const renameList = async (req, res) => {
    const userId = getUserId(req)
    const {listId, newListName} = req.body

    console.log(newListName)

    const list = await ListModel
        .findOne({
            owner: userId,
            _id: listId
        })
    
    list.name = newListName
    list.save()
    getLists(req, res)

}

const deleteList = async (req, res) => {
    const userId = getUserId(req)
    const {listId} = req.body

    const list = await ListModel
        .findOneAndDelete({
            owner: userId,
            _id: listId
        })

    res.send(list)

}

const createListEntry = async (req, res) => {
    const userId = getUserId(req)
    const {listId, entryName} = req.body

    const list = await ListModel
        .findOne({
            owner: userId,
            _id: listId
        })

    list.entries.push(entryName)
    list.save()
    res.send(list)
        
}

const renameListEntry = async (req, res) => {
    const userId = getUserId(req)
    const {listId, entryId, newEntryName} = req.body
    console.log(listId, entryId, newEntryName)
    const list = await ListModel
        .findOne({
            owner: userId,
            _id: listId
        })

    list.entries[entryId] = newEntryName
    list.save()
    res.send(list)


}

const deleteListEntry = async (req, res) => {
    const userId = getUserId(req)
    const {listId, entryId} = req.body

    const list = await ListModel
        .findOne({
            owner: userId,
            _id: listId
        })
        
    list.entries.splice(entryId, 1)
    list.save()
    res.send(list)

}

module.exports = { getLists, getList, createList, renameList, deleteList, 
    createListEntry, renameListEntry, deleteListEntry }
