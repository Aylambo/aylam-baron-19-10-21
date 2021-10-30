import React, {useContext, useState} from 'react'

const mainContext = React.createContext()

export function useMainContext() {
    return useContext(mainContext)
}


export function ContextProvider({children}) {

    const [eventData, setEventData] = useState([])
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [tempType, setTempType] = useState(true)
    const [isFav, setIsFavorite] = useState(false)
    const [favoritesToDisplay, setFavoritesToDisplay] = useState([])




    const value = {setFavoritesToDisplay, favoritesToDisplay, setIsFavorite, isFav, eventData, setEventData, selectedEvent, setSelectedEvent, isDarkMode, setIsDarkMode, setTempType, tempType}

    return (
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    )
}