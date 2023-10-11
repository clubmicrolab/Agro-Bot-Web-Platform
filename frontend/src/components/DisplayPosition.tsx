import { useCallback, useState, useEffect } from "react"
import React from 'react'
import "./DisplayPosition.scss"

const center = [47.0208, 28.8434]
const zoom = 13


export const DisplayPosition = ({ map, getCenter }) => {
    const [position, setPosition] = useState(() => map.getCenter())
    const onClick = useCallback(() => {
        map.setView(center, zoom)
    }, [map])

    const onMove = useCallback(() => {
        setPosition(map.getCenter())
        getCenter(map.getCenter())
    }, [map])

    useEffect(() => {
        getCenter(map.getCenter())
        map.on('move', onMove)
        return () => {
            map.off('move', onMove)
        }
    }, [map, onMove])

    return (
        <div className="Position">
            <div className="Position-container">
                <span>{position.lat.toFixed(4)}</span>
                /
                <span>{position.lng.toFixed(4)}</span>
            </div>
            <button onClick={onClick}>Reset</button>
        </div>
    )
}
