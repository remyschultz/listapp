import axios from 'axios'

const baseUrl = 'http://localhost:5001'

const getAllTodos = (setTodo) => {
    axios
        .get(baseUrl)
        .then(({data}) => {
            console.log(data)
            setTodo(data)
        })
}

const addTodo = (text, setText, setTodo) => {

    axios
        .post(`${baseUrl}/save`, {text})
        .then((data) => {
            console.log(data)
            setText('')
            getAllTodos(setTodo)
        })
        .catch((err) => console.log(err))
        
}

const updateTodo = (todoId, text, setTodo, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, {_id: todoId, text})
        .then((data) => {
            setText('')
            setIsUpdating(false)
            getAllTodos(setTodo)
        })
        .catch((err) => console.log(err))

}

const deleteTodo = (_id, setTodo) => {

    axios
        .post(`${baseUrl}/delete`, {_id})
        .then((data) => {
            getAllTodos(setTodo)
        })
        .catch((err) => console.log(err))

}

export {getAllTodos, addTodo, updateTodo, deleteTodo}