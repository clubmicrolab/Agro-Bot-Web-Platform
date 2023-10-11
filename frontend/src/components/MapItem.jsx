import React, { useState } from 'react'
import "./MapItem.scss"
import { FaPen } from "react-icons/fa6";

export const MapItem = ({ name, changeMapName, id, date, deleteMap, changeMap, current, toggleEdit, edit }) => {
    const [toggleInput, setToggleInput] = useState(true)
    const [inputValue, setInputValue] = useState(name)
    const changeInputValue = (e) => {
        setInputValue(e.target.value)
        changeMapName(id, e.target.value)
    }


    return (
        <div className='MapItem' onMouseLeave={() => setToggleInput(!toggleInput)} style={current ? { backgroundColor: "gold" } : null}>
            <div className='MapItem__name'>
                <input onChange={changeInputValue} readOnly={false} type="text" value={inputValue} />
                <FaPen onClick={() => setToggleInput(!toggleInput)} />
            </div>
            <div>
                <p>{String(date).slice(0, 25)}</p>
            </div>
            <div onClick={() => changeMap(id)}>
                Set Map
            </div>
            <div className='editButton' onClick={() => toggleEdit(id)} style={edit ? {backgroundColor: "blue"} : null}>
                Edit Map
            </div>
            <div onClick={() => deleteMap(id)}>
                Delete Map
            </div>
        </div>
    )
}
