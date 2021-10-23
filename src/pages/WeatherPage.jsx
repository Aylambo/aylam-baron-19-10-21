import React, { Fragment, useEffect} from 'react'


import Forecast from '../cmps/Forecast/Forecast'
import Form from '../cmps/Form/Form'
import Error from '../cmps/Helpers/Error'
import { LoadingSpinner } from '../cmps/Helpers/LoadingSpinner'
import useForecast from '../services/useForecast'
import { useMainContext } from '../services/Context'


const WeatherPage = () => {
    const { isError, isLoading, forecast, submitRequest, userCity } = useForecast()
    const { selectedEvent, setIsFavorite } = useMainContext()

    
    useEffect(() => {
        if (selectedEvent) {
            submitRequest(selectedEvent);
        } else {
            (userCity) ? submitRequest(userCity) : submitRequest('tel aviv')
        }
        
    }, [userCity])

    const onSubmit = (value) => {
        submitRequest(value)
        setIsFavorite(false)
    }

    return (
        <Fragment>
            <div className="box">
                {!isLoading && <Form submitForm={onSubmit} />}
                {isError && <Error msg={isError} error={true} />}
                {isLoading && <LoadingSpinner />}
            </div>
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    )
}

export default WeatherPage
