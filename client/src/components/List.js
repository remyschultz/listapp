import {React, useState, useRef, useEffect} from 'react'
import { createListEntry, renameList, renameListEntry } from '../utils/Api'
import ListEntry from './ListEntry'
import {FiEdit, FiCheck} from 'react-icons/fi'
import EditButton from './EditButton'
// import {BsCheckLg} from 'react-icons/bs'


const List = ({token, listId, entryId, isUpdatingEntry, setIsUpdatingEntry, list, setList, setLists, entryInputText, setEntryInputText, deleteListEntry, updateEntryMode, saveList}) => {

    // const [isDragging, setIsDragging] = useState(false)
    const [isMoving, setIsMoving] = useState(false)
    const [moving, setMoving] = useState(-1)

    const [lastSlot, setLastSlot] = useState(-1)

    useEffect(() => {
        if(moving !== -1) {
            const hrTop = document.getElementById(`hr-${moving}`)
            const hrBottom = document.getElementById(`hr-${moving + 1}`)
            if(moving !== lastSlot) {

                const temp = list.entries[lastSlot]
                list.entries[lastSlot] = list.entries[moving]
                list.entries[moving] = temp

                saveList(token, {list}, () => {})

                document.getElementById(`hr-${lastSlot}`).classList.remove('list-hr-selected-top')
                document.getElementById(`hr-${lastSlot + 1}`).classList.remove('list-hr-selected-bottom')

                setLastSlot(moving)
            }
            if(isMoving) {
                document.body.classList.add('disable-text-selection')
                hrBottom.classList.add('list-hr-selected-bottom')
                hrTop.classList.add('list-hr-selected-top')
            } else {
                document.body.classList.remove('disable-text-selection')
                hrBottom.classList.remove('list-hr-selected-bottom')
                hrTop.classList.remove('list-hr-selected-top')
            }
        }
    }, [isMoving, moving])

    return (
        <div className="list-container container h-100"
            onMouseUp={() => setIsMoving(false)}
            onMouseLeave={() => setIsMoving(false)}
        >
            {(() => {
                if(list === undefined) {
                    return (
                        <div className="row h-100">
                            <div className="text-make-selection col-12 my-auto text-center align-self-center align-middle ">Select a list</div>
                        </div>
                    )
                } else {
                    return (
                        <div className=''>
                            <div className="title-bar row justify-content-between">

                                <div className="col-6 row " 
                                        onMouseOver={
                                            (e) => {document.getElementById("title-icons").style.visibility = 'visible'}
                                        }
                                        onMouseOut={
                                            (e) => {document.getElementById("title-icons").style.visibility = 'hidden'}
                                        }>
                                    <div id="list-title" className="title text-start text-wrap fs-1 col-11">{list.name}
                                    </div>
                                    <div className="col-1 text-end h-100">
                                        <span id="title-icons" className="icons ">
                                            <EditButton
                                                onUpdate = {(text) => renameList(token, {listId, newListName: text}, setLists)}
                                                target = {'list-title'}
                                            />
                                        </span>
                                    </div>
                                </div>
                                

                                <div className="text-end col-6">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="New item..." 
                                            value={entryInputText} 
                                            onChange={(e) => setEntryInputText(e.target.value)} 
                                            onKeyDown={(e) => {if(e.key === 'Enter') {document.getElementById("entryInputButton").click();}}} />
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
                            {list.entries.map((entry, index) => {
                                return (
                                    <div className="list-entry h-100"
                                        onMouseOver={
                                            () => {
                                                if(isMoving) {
                                                    setMoving(index)
                                                }
                                            }
                                        }
                                    >
                                        <hr id={`hr-${index}`} />
                                        
                                        <ListEntry 
                                            key = {index}
                                            entryId = {index} 
                                            text = {entry}
                                            deleteListEntry = {deleteListEntry}
                                            token = {token}
                                            listId = {listId}
                                            setList = {setList}
                                            updateEntryMode = {updateEntryMode}
                                            highlight = {() => (moving === index)}
                                            setMoving = {setMoving}
                                            setIsMoving = {setIsMoving}
                                            setLastSlot = {setLastSlot}
                                        />
                                    </div>
                                    
                                )
                            })}
                             <hr id={`hr-${list.entries.length}`} />

                        </div>
                    )
                }
            })()}
        </div>
    )
}

export default List