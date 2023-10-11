import { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
import { ShowMap } from './components/ShowMap/ShowMap'
import { Maps } from './components/Maps'
import { Car } from './components/Car'
import { useSelector } from 'react-redux'
import { FaScaleBalanced } from 'react-icons/fa6'


function App() {
  const [maps, setMaps] = useState([{ zoom: 13, edit: false, center: [47.0208, 28.8434], coordonates: [{ position: { lat: 46.61226648711345, lng: 28.968891802902537 }, number: 1 }], name: "test", date: "2023-09-28T10:49:00.000Z", current: true }])
  const [currentMap, setCurrentMap] = useState(maps[0])
  let centerMap = useSelector(state => state.CenterPositionCoordonatesSlice.center)
  useEffect(() => {
    getData()
  }, [])

  console.log(maps)
  const deleteDataToApi = (id) => {
    axios.delete(`http://localhost:3500/api/maps/${id}`)
  }

  const toggleEdit = (id) => {
    if (maps.length > 1) {
      currentMap.edit = false
    }

    maps.forEach(map => {
      if (map.id === id) {
        map.current = true
        if (map.edit === true) {
          map.edit = false
        } else {
          map.edit = true
        }
        setCurrentMap(map)
        updateDataToApi({ ...map, "_id": map.id })
      }
    })
  }

  const updateDataToApi = (newData = { ...currentMap, "_id": currentMap.id, coordinates: currentMap.coordonates }) => {
    console.log(currentMap);
    console.log(newData);
    axios.put('http://localhost:3500/api/maps', newData)
  }

  const changeMapName = (id, name) => {
    currentMap.current = false
    updateDataToApi({ ...currentMap, "_id": currentMap.id })
    maps.forEach(map => {
      if (map.id === id) {
        map.name = name
        updateDataToApi({ ...map, "_id": id })
      }
    })
  }
  console.log(currentMap.edit);

  const getData = () => {
    axios.get('http://localhost:3500/api/maps')
      .then(function ({ data }) {
        let newMaps = []
        newMaps = data.map(item => {
          return {
            zoom: item.zoom,
            center: [item.center.coordCenter1, item.center.coordCenter2],
            id: item._id,
            coordonates: item.coordinates.map(itemCoord => {
              return {
                position: {
                  lat: itemCoord.position.lat,
                  lng: itemCoord.position.lng
                },
                number: itemCoord.number,
                id: itemCoord._id,
              }
            }),
            name: item.name,
            date: item.date,
            current: item.current,
            edit: false
          }
        })
        if (newMaps.length > 0) {
          setCurrentMap(newMaps.find(item => item.current === true))
          setMaps(newMaps)
        }
      })
  }




  const createMapToApi = (newMap) => {
    axios.post('http://localhost:3500/api/maps', newMap)
  }

  const addNewMap = () => {
    let newMap = { zoom: 13, center: centerMap, coordonates: [], name: `Map ${maps.length + 1}`, date: new Date, current: true }
    currentMap.current = false
    updateDataToApi({ ...currentMap, "_id": currentMap.id })
    setMaps([...maps, newMap])
    createMapToApi({
      "zoom": 13,
      "center": {
        "coordCenter1": 47.1309,
        "coordCenter2": 28.8494
      },
      "coordinates": [],
      "name": newMap.name,
      "date": newMap.date,
      "current": true,
    })
    currentMap.current = false
    setCurrentMap(newMap)
    getData()
  }

deleteDataToApi("65265eb88dcc3a55ac2e69f9")



  const addNewMarker = (id, newMarker) => {
    maps.forEach(map => {
      if (map.id === id) {
        map.coordonates = [...map.coordonates, newMarker]
      }
    })
  }

  const changeMap = (id) => {
    currentMap.current = false
    updateDataToApi({ ...currentMap, "_id": currentMap.id })
    maps.forEach(map => {
      if (map.id === id) {
        map.current = true
        setCurrentMap(map)
        updateDataToApi({ ...map, "_id": map.id })
      }
    })
  }





  const deleteMap = (id) => {
    console.log(id, "id");
    deleteDataToApi(id)
    getData()
  }

  const deleteLastMarker = (id) => {
    maps.forEach(map => {
      if (map.id === id) {
        map.coordonates.pop()
      }
    })
  }

  const setNewPosition = (id, idPosition, position) => {
    maps.forEach(map => {
      if (map.id === id) {
        map.coordonates.map(item => {
          if (item.id === idPosition) {
            item.position = { lat: position[0], lng: position[1] }
          }
        })
      }
    })
  }

  return (
    <div className='App'>
      {maps.length > 0 && <ShowMap toggleEdit={toggleEdit} edit={currentMap ? currentMap.edit : false } Map={currentMap} addNewMap={addNewMap} AddNewMarker={addNewMarker} deleteLastMarker={deleteLastMarker} setNewPosition={setNewPosition} />}
      <Car />
      {maps.length > 0 && <Maps toggleEdit={toggleEdit} changeMap={changeMap} Maps={maps} deleteMap={deleteMap} changeMapName={changeMapName} />}
      <Maps />
      <button onClick={() => getData()}>Get Data</button>
      <button onClick={() => createMapToApi()}>Post</button>
      <button onClick={() => deleteDataToApi()}>Delete</button>
      <button onClick={() => updateDataToApi()}>update</button>
    </div>

  )
}

export default App
