import {React, useState} from 'react'
// import { useEffect, useState } from 'react';

import {FiEdit, FiCheck} from 'react-icons/fi'

const EditButton = ({onUpdate, target}) => {
    const [isEditing, setIsEditing] = useState(false);

    function onEdit() {
        document.getElementById(target).contentEditable = "true"
        document.getElementById(target).focus()
    }

    function onCheck() {
        document.getElementById(target).contentEditable = "false"
        onUpdate(document.getElementById(target).innerText)
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