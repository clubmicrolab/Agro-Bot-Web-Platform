
// import { useMapEvents } from 'react-leaflet'


export function createNumberedIcon(number) {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div>${number}</div>`,
    iconSize: [27, 27]
  });
}

export const deleteMarker = (e, setCount, deleteLastMarker, count, id) => {
  e.stopPropagation()
  if (count > 0) setCount(count => --count)
  deleteLastMarker(id)
}

export const newPosition = (id, position, setNewPosition, MapId) => {
  setNewPosition(MapId, id, position)
}


