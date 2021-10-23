import React from 'react'
import {useMainContext} from '../../services/Context'


const DaysPreview = ({ day, maxTemp, minTemp, dayText, nightText }) => {
    const {tempType} = useMainContext()

    const changeTempsDay = (tempType) => {
        if (tempType) {
           return    <p>High: 
                <br/>{maxTemp.Value} °{maxTemp.Unit}</p>
        } else {
            const celcTemp = ((maxTemp.Value - 32) * 5 / 9).toFixed(0)
            return <p>High: <br/> {celcTemp} °C</p>
        }
    }
    const changeTempsNight = (tempType) => {
        if (tempType) {
           return  <p>Low: <br/> {minTemp.Value} °{minTemp.Unit}</p>

        } else {
            const celcTemp = ((maxTemp.Value - 32) * 5 / 9).toFixed(0)
            return <p>High: <br/> {celcTemp} °C</p>
        }
    }

    

    return (
        <div className="weekday-card">
            <h5>{day}</h5>
            <div className="card-info">
                <div className="card-col">
                    <h6>Day</h6>
                    <section>{changeTempsDay(!tempType)}</section>
                    <p>{dayText}</p>
                </div>
                <div className="card-col">
                    <h6>Night</h6>
                    <section>{changeTempsNight(!tempType)}</section>
                    <p>{nightText}</p>
                </div>
            </div>
        </div>
    )
}

export default DaysPreview
