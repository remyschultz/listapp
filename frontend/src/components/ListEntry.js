import React from 'react'

import {AiOutlineDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import { deleteListEntry } from '../utils/Api'

const ListEntry = ({key, entryId, text, deleteListEntry, token, listId, setList, updateEntryMode}) => {
  return (
    <div className="listEntry fs-5 row justify-content-between h-100">
        <span className="text-start col-9">{text}</span>
        <span className="icons col-3 text-end">
            <FiEdit className="icon icon-edit" onClick={() => {updateEntryMode(entryId, text)}}/>
            <AiOutlineDelete className="icon icon-delete" onClick={() => {deleteListEntry(token, {listId, entryId}, setList)}}/>
        </span>
    </div>
  )
}

export default ListEntry