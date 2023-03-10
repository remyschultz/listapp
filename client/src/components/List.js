import React from 'react'
import { createListEntry, renameListEntry } from '../utils/Api'
import ListEntry from './ListEntry'

const List = ({token, listId, entryId, isUpdatingEntry, setIsUpdatingEntry, list, setList, entryInputText, setEntryInputText, deleteListEntry, updateEntryMode}) => {
    return (
        <div className="list-container container h-100">
            {(() => {
                if(list === undefined) {
                    return (
                        <div className="row h-100">
                            <div className="text-make-selection col-12 my-auto text-center align-self-center align-middle ">Please select a list</div>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <div className="title-bar row justify-content-between">
                                <div className="title text-start text-wrap fs-1 col-6">{list.name}</div>
                                <div className="col-4 text-end col-6">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="New item..." value={entryInputText} onChange={(e) => setEntryInputText(e.target.value)} onKeyDown={(e) => {if(e.key === 'Enter') {document.getElementById("entryInputButton").click();}}} />
                                        <button id="entryInputButton" class="btn btn-primary" type="button"
                                            onClick={
                                                (entryInputText !== '') ?
                                                    isUpdatingEntry ? 
                                                        () => {
                                                            setEntryInputText('')
                                                            renameListEntry(token, {listId, entryId, newEntryName: entryInputText}, setList)
                                                            setIsUpdatingEntry(false)
                                                        }
                                                        : () => {
                                                            setEntryInputText('')
                                                            createListEntry(token, {listId, entryName: entryInputText}, setList)
                                                        }
                                                    : null
                                            }
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            {list.entries.map((entry, index) => {
                                return (
                                    <div className="list-entry">
                                        {(index !== 0) ? <hr /> : null}
                                        
                                        <ListEntry 
                                            key = {index}
                                            entryId = {index} 
                                            text = {entry}
                                            deleteListEntry = {deleteListEntry}
                                            token = {token}
                                            listId = {listId}
                                            setList = {setList}
                                            updateEntryMode = {updateEntryMode}
                                        />
                                    </div>
                                    
                                )
                            })}

                        </div>
                    )
                }
            })()}
        </div>
    )
}

export default List