import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react'
import { MapContainer, TileLayer, ScaleControl, useMapEvents, Polyline } from 'react-leaflet'
import { DisplayPosition } from '../DisplayPosition'
import "leaflet/dist/leaflet.css"
import "./ShowMap.scss"
import { useDispatch } from 'react-redux'
import { getCoordonates } from '../../features/CenterPositionCoordonatesSlice'
import { DraggableMarker } from './DraggableMarker'
import { deleteMarker } from './Functions'
import { newPosition } from './Functions'


const zoom = 13
const center = [47.0208, 28.8434]


export const ShowMap = ({ Map, AddNewMarker, deleteLastMarker, setNewPosition, addNewMap, edit, toggleEdit }) => {
  const [count, setCount] = useState(1)
  const [map, setMap] = useState(null)
  const dispatch = useDispatch()
  const refContainer = useRef()


  let coordinates
  if (Map) {
    coordinates = Map.coordonates.map((marker) => marker.position);
  }
  const getCenter = (data) => {
    dispatch(getCoordonates(Object.values(data)))
  }









  useEffect(() => {
    let handler = (event) => {
      if (!refContainer.current.contains(event.target) && Map.edit === true) {
        toggleEdit(Map.id)
        console.log("jfdsljfkl");
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const MyComponent = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        if (edit === true) {
          setCount(count => ++count)
          AddNewMarker(Map.id, { position: { lat: lat, lng: lng }, id: crypto.randomUUID(), number: Map.coordonates.length + 1 })
        }
      },
    });
  };

  return (
    <div className="Map-container" ref={refContainer}>
      <MapContainer
        onMove={(e) => mouseMove(e)}
        center={Map && Map.center}
        zoom={Map && Map.zoom}
        scrollWheelZoom={true}
        ref={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Map && Map.coordonates.map(item => (
          <DraggableMarker initialPosition={item.position} key={crypto.randomUUID()} iconNumber={item.number} id={item.id} setNewPosition={newPosition} PositionNew={setNewPosition} MapId={Map.id} />
        ))}
        <ScaleControl />
        <MyComponent edit={edit} />
        <Polyline positions={coordinates} color="black" />
      </MapContainer>
      <div className='Map-containerTools'>
        {map ? <DisplayPosition getCenter={getCenter} map={map} /> : null}
        <button className='AddMap' onClick={() => addNewMap()}>Add New Map</button>
        <div className='DeleteMarker'>
          <div className='DeleteButton' onClick={(e) => deleteMarker(e, setCount, deleteLastMarker, count, Map.id)}>Delete Last Marker</div>
          <span>Total Markers: {Map && Map.coordonates.length}</span>
        </div>
      </div>
    </div>
  )
}

