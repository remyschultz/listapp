import axios from 'axios'

const baseUrl = 'http://localhost:5001'
const authHeader = (token) => {return {headers: {"Authorization": `Bearer ${token}`}}}

function getLists(token, setState) {
    axios.get(
        `${baseUrl}/getLists`,
        authHeader(token)
    )
    .then(({data}) => {
        setState(data)
    })
}

function getList(token, {listId}, setList) {
    // console.log(listId)
    axios.get(
        `${baseUrl}/getList?listId=${listId}`,
        authHeader(token)
    )
    .then(({data}) => {

        setList(data)
    })
}

function createList(token, {listName}, setState) {
    axios.post(
        `${baseUrl}/createList`,
        {listName},
        authHeader(token)
    )
    .then(({data}) => {
        setState(data)
    })
}

function renameList(token, {listId, newListName}, setState) {
    axios.post(
        `${baseUrl}/renameList`,
        {listId, newListName},
        authHeader(token)
    )
    .then(({data}) => {
        setState(data)
    })
}

function deleteList(token, {listId}, setState) {
    axios.post(
        `${baseUrl}/deleteList`,
        {listId},
        authHeader(token)
    )
    .then(({data}) => {
        setState(data)
    })
}

function createListEntry(token, {listId, entryName}, setState) {
    // console.log(token, listId, entryName)
    axios.post(
        `${baseUrl}/createListEntry`,
        {listId, entryName},
        authHeader(token)
    )
    .then(({data}) => {
        setState(data)
    })
}

function renameListEntry(token, {listId, entryId, newEntryName}, setState) {

    axios.post(
        `${baseUrl}/renameListEntry`,
        {listId, entryId, newEntryName},
        authHeader(token)
    )
    .then(({data}) => {
        setState(data)
    })
}

function deleteListEntry(token, {listId, entryId}, setState) {
    axios.post(
        `${baseUrl}/deleteListEntry`,
        {listId, entryId},
        authHeader(token)
    )
    .then(({data}) => {
        setState(data)
    })
}

export {getLists, getList, createList, renameList, deleteList, 
    createListEntry, renameListEntry, deleteListEntry}