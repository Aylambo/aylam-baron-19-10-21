import React from 'react'
import nightImg from '../../assets/img/night.svg'
import {useMainContext} from '../../services/Context'

import dayImg from '../../assets/img/day.svg'
import { useHistory } from 'react-router-dom'


const FavPreview = (props) => {
    const { setSelectedEvent} = useMainContext()

    const history = useHistory()


    const onSelect = () => {
        setSelectedEvent(props.location)
        history.push('/')
    }

    return (
        <div className="favs-container" onClick={onSelect}>
            <img src={props.isDayTime ? dayImg : nightImg} alt="" />
            <div className="icon">

            </div>
            <div className="card-text">

                <h5>{props.location}</h5>
                <div>{props.weatherText}</div>
                <div className="card-temp">
                    <span>{props.temperature.Metric.Value} °{props.temperature.Metric.Unit}</span>
                </div>
            </div>
        </div>
    )
}

export default FavPreview
