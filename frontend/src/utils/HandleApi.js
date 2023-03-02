import axios from 'axios'

const baseUrl = 'http://localhost:5001'

const getAllLists = (setList) => {
    axios
        .get(baseUrl)
        .then(({data}) => {
            console.log(data)
            setList(data)
        })
}

const addList = (text, setText, setList) => {

    axios
        .post(`${baseUrl}/save`, {text})
        .then((data) => {
            console.log(data)
            setText('')
            getAllLists(setList)
        })
        .catch((err) => console.log(err))
        
}

const updateList = (listId, text, setList, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, {_id: listId, text})
        .then((data) => {
            setText('')
            setIsUpdating(false)
            getAllLists(setList)
        })
        .catch((err) => console.log(err))

}

const deleteList = (_id, setList) => {

    axios
        .post(`${baseUrl}/delete`, {_id})
        .then((data) => {
            getAllLists(setList)
        })
        .catch((err) => console.log(err))

}

export {getAllLists, addList, updateList, deleteList}