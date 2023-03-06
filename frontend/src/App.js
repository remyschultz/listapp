import { useEffect, useState } from 'react';
import List from './components/List'
import Logout from "./components/Logout";
import User from "./components/User";
import Login from "./components/Login";
import { useAuth0 } from "@auth0/auth0-react";
import { addList, deleteList, getAllLists, updateList } from './utils/HandleApi';

function App() {

  const [list, setList] = useState([])
  const [text, setText] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [listId, setListId] = useState('')

  const [token, setToken] = useState('')

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  // console.log(JSON.stringify(user, null, 2))

  useEffect(() => {
    if(isAuthenticated) {
      (async () => {
        await getAccessTokenSilently({
            audience: 'http://localhost:5001'
        }).then((token) => {
          setToken(token)
          getAllLists(token, setList)
        })
     })()
   }
  }, [isAuthenticated])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setListId(_id)
  }

  if(!isAuthenticated) {
    return (
      <div className="App">
        <div>
          <p>Login to continue</p>
          <Login />
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <Logout />
      <User />

      <div className="container">

        <h1>List App</h1>

        <div className="top">

          <input 
            type="text" 
            placeholder="Add item" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add" 
            onClick={
            isUpdating ? 
              () => updateList(token, listId, text, setList, setText, setIsUpdating) 
              : () => addList({token, text, setText, setList})
          }>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">

          {list.map((item) => {
            return <List 
              key = {item._id} 
              text = {item.text}
              updateMode = {() => updateMode(item._id, item.text)}
              deleteList = {() => deleteList(token, item._id, setList)}
            />
          })}

        </div>

      </div>

    </div>
  );
}

export default App;
