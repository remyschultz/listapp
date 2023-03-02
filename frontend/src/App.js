import { useEffect, useState } from 'react';
import List from './components/List'
import { addList, deleteList, getAllLists, updateList } from './utils/HandleApi';

function App() {

  const [list, setList] = useState([])
  const [text, setText] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [listId, setListId] = useState('')

  useEffect(() => {
    getAllLists(setList)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setListId(_id)
  }

  return (
    <div className="App">

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
              () => updateList(listId, text, setList, setText, setIsUpdating) 
              : () => addList(text, setText, setList)
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
              deleteList = {() => deleteList(item._id, setList)}
            />
          })}

        </div>

      </div>

    </div>
  );
}

export default App;
