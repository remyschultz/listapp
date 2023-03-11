import {React, useState} from 'react'
// import { useEffect, useState } from 'react';

import {FiEdit, FiCheck} from 'react-icons/fi'

const EditButton = ({onUpdate, target}) => {
    const [isEditing, setIsEditing] = useState(false);

    function onEdit() {
        target.contentEditable = "true"
        target.focus()
    }

    function onCheck() {
        target.contentEditable = "false"
        onUpdate(target.innerText)
    }

    return (
        <div onClick={() => {
            if(isEditing) {
                setIsEditing(false)
                onCheck()
            } else {
                setIsEditing(true)
                onEdit()
            }
        }}>
            {(() => {
                if(isEditing) {
                    return <FiCheck id="edit-title-check" className="icon icon-check"/>
                } else {
                    return <FiEdit  className="icon icon-edit" />
                }
            })()}
        </div>
    )
}

export default EditButton