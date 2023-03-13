import {React, useState} from 'react'

import {AiOutlineDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {RxHamburgerMenu} from 'react-icons/rx'
import { deleteListEntry } from '../utils/Api'

const ListEntry = ({key, entryId, text, deleteListEntry, token, listId, setList, updateEntryMode, setMoving, setIsMoving, setLastSlot}) => {
    
    const iconsId = `entry-icons-${entryId}`
    
    return (
        <div className={"listEntry fs-5 row justify-content-between h-100 "} 
            onMouseOver={
                (e) => {document.getElementById(iconsId).style.visibility = 'visible'}
            }
            onMouseOut={
                (e) => {document.getElementById(iconsId).style.visibility = 'hidden'}
            }>
            <span className="col-9 h-100">
                <span className="text-start">
                    {text}
                </span>
            </span>
            <div className='col-3 text-end h-100'>
                <span id={iconsId} className="icons ">
                    <FiEdit className="icon icon-edit" 
                        onClick={() => {updateEntryMode(entryId, text)}}/>
                    <AiOutlineDelete className="icon icon-delete" 
                        onClick={() => {deleteListEntry(token, {listId, entryId}, setList)}}/>
                </span>
                <span>
                <RxHamburgerMenu className='icon icon-hamburger'
                    onMouseDown={() => {
                        setMoving(entryId)
                        setLastSlot(entryId)
                        setIsMoving(true)
                        // document.getElementById(`hr-${entryId}`)
                    }} 
                    onMouseUp={() => {
                        
                    }}
                />

                </span>

            </div>
        </div>
    )
}

export default ListEntry