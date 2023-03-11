import {React, useState} from 'react'


const ListOfLists = ({token, setLists, lists, setListId, listNameInputText, setListNameInputText, createList}) => {
    
  return (
    <div className="sidebar">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="New item..." value={listNameInputText} onChange={(e) => setListNameInputText(e.target.value)} onKeyDown={(e) => {if(e.key === 'Enter') {document.getElementById("listNameInputButton").click();}}} />
            <button class="btn btn-primary" type="button" id="listNameInputButton"
            
            onClick={
                (listNameInputText !== '') ?
                    () => {
                        setListNameInputText('')
                        createList(token, {listName: listNameInputText}, setLists)
                    }
                    : null
            }
            >+</button>
        </div>
            <div className="button-text fs-3">+</div>
        <ul className="list-group my-3">
        {    
            lists.map((list) => {
                return (
                    <li className="list-group-item list-name"> 
                            <div className="text-start text-wrap fs-5" onClick={() => {
                                setListId(list._id)
                            }}>{list.name}</div>
                    </li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default ListOfLists