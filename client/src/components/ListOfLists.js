import {React, useState} from 'react'
import {AiOutlineDelete} from 'react-icons/ai'

const ListOfLists = ({token, setLists, lists, listId, deleteList, setListId, setList, listNameInputText, setListNameInputText, createList}) => {
    
  return (
    <div className="sidebar w-100">
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
            lists.map((list, index) => {
                return (
                    <li className="list-group-item list-name"
                        onMouseOver={
                            (e) => {document.getElementById(`list-name-${index}`).style.visibility = 'visible'}
                        }
                        onMouseOut={
                            (e) => {document.getElementById(`list-name-${index}`).style.visibility = 'hidden'}
                        }
                    > 
                        <div className="row w-100 ">
                            <div className="text-start text-wrap fs-5 col" onClick={() => {
                                setListId(list._id)
                            }}>
                                {list.name}
                            </div>
                            <div id={`list-name-${index}`} className="col-1 text-end icons">
                                <AiOutlineDelete className="icon icon-delete"
                                    onClick={() => {
                                        deleteList(token, {listId: list._id}, (lists) => {
                                            setLists(lists)
                                            if(list._id === listId) {
                                                setList(undefined)
                                            }
                                        })
                                    }}/>
                            </div>
                        </div>
                    </li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default ListOfLists