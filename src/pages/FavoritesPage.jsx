
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import FavPreview from '../cmps/Forecast/FavPreview.jsx'


export function FavoritesPage() {

    const favorites = useSelector(state => state.favoritesModule)

    const [favoritesToDisplay, setFavoritesToDisplay] = useState([])

    useEffect(() => {
        currFavorites()
    }, [favorites])
    
    const currFavorites = () => {

        const favoritesToDisplay = favorites.favorites.filter(favo => favo.isFavorite)
        setFavoritesToDisplay(favoritesToDisplay)

    }
    return (
        <div className="favs-main">
        
            {favoritesToDisplay && favoritesToDisplay.map(favo => <FavPreview key={favo.location} {...favo} />)}

        </div>
        

    )
}


