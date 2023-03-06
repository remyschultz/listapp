import axios from 'axios'

const baseUrl = 'http://localhost:5001'



const getAllLists = (token, setList) => {

    axios.get(
            baseUrl,
            { 
                headers: {
                    "Authorization" : `Bearer ${token}`
                }
            }
        )
        .then(({data}) => {
            setList(data)
        })
}

const addList = ({token, text, setText, setList}) => {

    axios
        .post(`${baseUrl}/save`, {text},
        { 
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((data) => {
            console.log(data)
            setText('')
            getAllLists(token, setList)
        })
        .catch((err) => console.log(err))
        
}

const updateList = (token, listId, text, setList, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, {_id: listId, text},
        { 
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((data) => {
            setText('')
            setIsUpdating(false)
            getAllLists(token, setList)
        })
        .catch((err) => console.log(err))

}

const deleteList = (token, _id, setList) => {

    axios
        .post(`${baseUrl}/delete`, {_id},
        { 
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((data) => {
            getAllLists(token, setList)
        })
        .catch((err) => console.log(err))

}

export {getAllLists, addList, updateList, deleteList}