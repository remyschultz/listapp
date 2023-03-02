import React from 'react'

import {AiOutlineDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'

const List = ({text, updateMode, deleteList}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <FiEdit className="icon" onClick={updateMode}/>
            <AiOutlineDelete className="icon" onClick={deleteList}/>
        </div>
    </div>
  )
}

export default List