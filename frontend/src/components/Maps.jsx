import React from 'react'
import "./Maps.scss"
import { MapItem } from './MapItem'

export const Maps = ({ Maps, changeMapName, deleteMap, changeMap, toggleEdit }) => {
  return (
    <div className='Maps'>
      <div className='Maps__header'>
        <p>Maps</p>
        <span>Total maps 1</span>
      </div>
      <div className='Maps__container'>
        {Maps && Maps.map(item =>
        (<MapItem changeMap={changeMap}
          edit={item.edit}
          toggleEdit={toggleEdit}
          deleteMap={deleteMap}
          date={item.date}
          key={crypto.randomUUID()}
          changeMapName={changeMapName}
          id={item.id}
          name={item.name}
          current={item.current}
           />
        ))}
      </div>
    </div>
  )
}
