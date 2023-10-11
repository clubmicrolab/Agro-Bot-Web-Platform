import { useState, useRef, useMemo, useCallback } from "react"
import { MapContainer, TileLayer, useMap, ScaleControl, useMapEvents, Marker, Popup, Polyline } from 'react-leaflet'
import { createNumberedIcon } from "./Functions"


export function DraggableMarker({ initialPosition, setNewPosition, id, iconNumber, PositionNew, MapId }) {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(initialPosition)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
            let newCoordinates = marker.getLatLng()
            setNewPosition(id, Object.values(newCoordinates), PositionNew, MapId)
          }
        },
      }),
      [],
    )
  
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
  
  
    return (
      <Marker
        icon={createNumberedIcon(iconNumber)}
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
          </span>
        </Popup>
      </Marker>
    )
  }