import { useEffect, useState } from 'react';
import List from './components/List'
import LoginLogout from './components/LoginLogout'
import ListOfLists from './components/ListOfLists'
// import Logout from "./components/Logout";
// import User from "./components/User";
// import Login from "./components/Login";
import { useAuth0 } from "@auth0/auth0-react";
import { getLists, getList, createList, renameList, deleteList, 
  createListEntry, renameListEntry, deleteListEntry } from './utils/Api';

function App() {

  const [list, setList] = useState(undefined)
  const [lists, setLists] = useState([])
  const [listId, setListId] = useState(undefined)
  // const [text, setText] = useState('')
  // const [listId, setListId] = useState('')

  const [token, setToken] = useState('')
  const [entryId, setEntryId] = useState('')

  const [entryInputText, setEntryInputText] = useState('')
  const [listNameInputText, setListNameInputText] = useState('')
  const [isUpdatingEntry, setIsUpdatingEntry] = useState(false)
  const [isUpdatingListName, setIsUpdatingListName] = useState(false)


  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  // console.log(JSON.stringify(user, null, 2))

  useEffect(() => {
    if(isAuthenticated) {
      (async () => {
        await getAccessTokenSilently({
            audience: 'http://localhost:5001'
        }).then((token) => {
          setToken(token)
          // console.log(token)
          getLists(token, setLists)
        })
     })()
   }
  }, [isAuthenticated])

  useEffect(() => {
    if(isAuthenticated && listId !== undefined) {
      getList(token, {listId}, setList)
    }
  }, [listId])


  if(!isAuthenticated) {
    return (
      <div className="App">
        <div>
          <p>Login to continue</p>
          <LoginLogout />
        </div>
      </div>
    )
  }

  const updateEntryMode = (entryId, entryText) => {
    setIsUpdatingEntry(true)
    setEntryInputText(entryText)
    setEntryId(entryId)
    // setListId(_id)
  }

  

  return (
    
    <div className="App">
      <nav className="navbar navbar-light bg-light border-bottom">
        <div className="nav-item nav-item-left">
          <span className="navbar-brand mb-0 h1">List Demo App</span>
        </div>
        <div className="nav-item nav-item-right">
          <LoginLogout />
        </div>
      </nav>
      
      <div className="container-lg app-container">
        <div className="row h-100">
          <div className="col-3 border-end">
            <ListOfLists 
              token = {token}
              setLists = {setLists}
              lists = {lists}
              setListId = {setListId}
              listNameInputText = {listNameInputText}
              setListNameInputText = {setListNameInputText}
              createList = {createList}
            />
          </div>
          <div className="col col-9 h-100">
            <List 
              token = {token}
              listId = {listId}
              entryId = {entryId}
              isUpdatingEntry = {isUpdatingEntry}
              setIsUpdatingEntry = {setIsUpdatingEntry}
              list = {list}
              setList = {setList}
              entryInputText = {entryInputText}
              setEntryInputText = {setEntryInputText}
              deleteListEntry = {deleteListEntry}
              updateEntryMode = {updateEntryMode}
              // list = {list}
              // setEntryInputText = {setEntryInputText}
              // token
              // listId
              // entryId
              // setList
              // entryInputText
            />
          </div>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className="App">
  //     <Logout />
  //     <User />

  //     <div className="container">

  //       <h1>List App</h1>

  //       <div className="top">

  //         <input 
  //           type="text" 
  //           placeholder="Add item" 
  //           value={text} 
  //           onChange={(e) => setText(e.target.value)}
  //         />

  //         <div
  //           className="add" 
  //           onClick={
  //           isUpdating ? 
  //             () => updateList(token, listId, text, setList, setText, setIsUpdating) 
  //             : () => addList({token, text, setText, setList})
  //         }>
  //           {isUpdating ? "Update" : "Add"}
  //         </div>

  //       </div>

  //       <div className="list">

  //         {list.map((item) => {
  //           return <List 
  //             key = {item._id} 
  //             text = {item.text}
  //             updateMode = {() => updateMode(item._id, item.text)}
  //             deleteList = {() => deleteList(token, item._id, setList)}
  //           />
  //         })}

  //       </div>

  //     </div>

  //   </div>
  // );
}

export default App;
