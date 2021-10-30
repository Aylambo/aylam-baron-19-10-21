import React from 'react'
import nightImg from '../../assets/img/night.svg'
import dayImg from '../../assets/img/day.svg'
import Switch from '@mui/material/Switch';
import favoIcon from '../../assets/favorite-icon-14.jpg'
import {useMainContext} from '../../services/Context'

import { useSelector } from 'react-redux'


const CurrentDay = (props) => {
    const favorites = useSelector(state => state.favoritesModule)
    const { location, weatherText, temperature, isDayTime, onAdd } = props

    const {tempType, setTempType, isFav, setIsFavorite} = useMainContext()

    

    const addFavorite = () => {
        const isFavorite = favorites.isFavorite = !favorites.isFavorite
        setIsFavorite(isFavorite)
        onAdd({...props, isFavorite: isFavorite})
    }
    return (
        <div className="main-card-content">
            <div className="icon-div">
                <button className="fav-btn" onClick={addFavorite}>{(!isFav) ? 'Add ' : 'Remove'} To Favorites</button>
                <img src={favoIcon} className={(!isFav) ? 'black' : 'show'}  alt=""/>
            </div>
            <div className="curr-day-info">
                <img src={isDayTime ? dayImg : nightImg} alt="" />

                <div className="curr-day-text">
                    <section>
                        <span>°C</span>
                        <Switch  onClick={() => setTempType(!tempType)}></Switch>
                        <span>°F</span>
                    </section>
                    <h5 >{location}</h5>
                    <div>{weatherText}</div>
                    <div className="temp-div">
                        {tempType && 
                         <span>{temperature.Metric.Value} °{temperature.Metric.Unit}</span>
                        }
                        {!tempType && 
                         <span>{temperature.Imperial.Value} °{temperature.Imperial.Unit}</span>
                        }
                    </div>
                </div>
            </div>

        </div>


    )
}


export default CurrentDay
