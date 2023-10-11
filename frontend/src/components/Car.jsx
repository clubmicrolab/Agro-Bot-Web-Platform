import React, { useState } from 'react'
import car3 from "./../assets/img/car.jpg"
import wheelLeft from "./../assets/img/wheelleft.jpg"
import wheelRight from "./../assets/img/wheelRight.jpg"
import "./Car.scss"

export const Car = () => {

const [wheelRotation, setWheelRotation] = useState(0)

    return (
        <div className='Car'>
            <div className='Car__container'>
                <img className='Car__wheelLeft'  style={{ transform: `rotate(${wheelRotation}deg)` }} src={wheelLeft} alt="Wheel-Left" />
                <img className='Car__wheelRight' style={{ transform: `rotate(${wheelRotation}deg)` }} src={wheelRight} alt="Wheel-Right" />
                <img className='Car__img' src={car3} alt="car" />
                <button onClick={() => setWheelRotation(wheelRotation - 1)}>left</button>
                <button onClick={() => setWheelRotation(wheelRotation + 1)}>right</button>
            </div>
            <div>

            </div>
        </div>
    )
}
