import React from 'react'

const ListOfLists = ({token, setLists, lists, setListId, listNameInputText, setListNameInputText, createList}) => {
  return (
    <div className="sidebar">
        <input className="add-input" type="text" placeholder="New item..." value={listNameInputText} onChange={(e) => setListNameInputText(e.target.value)}/>

        <button type="button" className="btn btn-primary addButton" 
            onClick={
                (listNameInputText !== '') ?
                    () => {
                        createList(token, {listName: listNameInputText}, setLists)
                    }
                    : null
            }
        >
            <div className="button-text fs-3">+</div>
        </button>
        {/* <span className="text-start fs-5">New List</span> */}
        <ul className="list-group my-3">
        {    
            lists.map((list) => {
                return (
                    <li className="list-group-item list-name"> 
                        {/* <div className="sidebarListName" key={list._id}> */}
                            <div className="text-start text-wrap fs-5" onClick={() => {setListId(list._id)}}>{list.name}</div>
                        {/* </div> */}
                    </li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default ListOfLists