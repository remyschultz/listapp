import { useEffect, useState } from 'react';
import List from './components/List'
import LoginLogout from './components/LoginLogout'
import ListOfLists from './components/ListOfLists'
import { useAuth0 } from "@auth0/auth0-react";
import { getLists, getList, createList, renameList, deleteList, 
  createListEntry, renameListEntry, deleteListEntry } from './utils/Api';
const config = require('./config')

function App() {

  const [list, setList] = useState(undefined)
  const [lists, setLists] = useState([])
  const [listId, setListId] = useState(undefined)

  const [token, setToken] = useState('')
  const [entryId, setEntryId] = useState('')

  const [entryInputText, setEntryInputText] = useState('')
  const [listNameInputText, setListNameInputText] = useState('')
  const [isUpdatingEntry, setIsUpdatingEntry] = useState(false)
  const [isUpdatingListName, setIsUpdatingListName] = useState(false)

  const [listName, setListName] = useState('')


  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  // console.log(isAuthenticated)

  useEffect(() => {
    if(isAuthenticated) {
      (async () => {
        await getAccessTokenSilently({
            audience: config.SERVER_URL
        }).then((token) => {
          setToken(token)
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
  }

  

  return (
    
    <div className="App">
      <nav className="navbar navbar-light bg-light border-bottom">
        <div className="nav-item nav-item-left">
          <span className="navbar-brand mb-0 h1">List App</span>
        </div>
        <div className="nav-item nav-item-right">
          <LoginLogout />
        </div>
      </nav>
      
      <div className="container-lg app-container">
        <div className="row h-100">
          <div className="col-4 border-end h-100 overflow-auto">
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
          <div className="col col-8 h-100 overflow-auto">
            <List 
              token = {token}
              listId = {listId}
              entryId = {entryId}
              isUpdatingEntry = {isUpdatingEntry}
              setIsUpdatingEntry = {setIsUpdatingEntry}
              list = {list}
              setList = {setList}
              setLists = {setLists}
              entryInputText = {entryInputText}
              setEntryInputText = {setEntryInputText}
              deleteListEntry = {deleteListEntry}
              updateEntryMode = {updateEntryMode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
