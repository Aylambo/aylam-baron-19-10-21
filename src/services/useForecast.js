import {useState} from 'react'
import axios from 'axios';
import getCurrentDay from './getCurrentDay.js'
import getUpcomingDays from './getUpcomingDays.js'


const API_KEY = 'qtGicaL6HeFwpGmdcJpCZSO8VEOArdI8'

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);
    const [userCity, setUserCity] = useState(null);
    
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getUserCity(lat, lon)
    });
    const getUserCity = async (lat, lon) => {


            const BASE_URL = 'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search/';
            const query = `?apikey=${API_KEY}&q=${lat},${lon}`
            const {data} = await axios(BASE_URL + query)
            
            if (!data || data.length === 0) {
                setError('Something went wrong, no such city please try again');
                setLoading(false);
                return;
            }
            return setUserCity(data.LocalizedName)
    }

    const getCity = async (city) => {
        // const BASE_URL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const BASE_URL = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete/';
        const query = `?apikey=${API_KEY}&q=${city}`

        const {
            data
        } = await axios(BASE_URL + query)

        if (!data || data.length === 0) {
            setError('Something went wrong, no such city please try again');
            setLoading(false);
            return;
        }
        return data[0]
    }

    const getLocationWeather = async (id) => {
        const BASE_URL = 'https://dataservice.accuweather.com/currentconditions/v1/';
        const query = `${id}?apikey=${API_KEY}`

        const {
            data
        } = await axios(BASE_URL + query)

        if (!data || data.length === 0) {
            setError('Something went wrong, could not get info for coming days');
            setLoading(false);
            return;
        }
        return data;

    }

    const getFiveDays = async (id) => {
        const BASE_URL = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/'
        const query = `${id}?apikey=${API_KEY}`
        const {
            data
        } = await axios(BASE_URL + query)
        if (!data || data.length === 0) {
            setError('Something went wrong');
            setLoading(false);
            return;
        }
        return data;
    }


    const getData = (res, data, fiveDaysData) => {
        const currentDay = getCurrentDay(data[0], res.LocalizedName);
        const upcomingDays = getUpcomingDays(fiveDaysData.DailyForecasts);

        setForecast({
            currentDay,
            upcomingDays
        });
        setLoading(false);
    };

    const submitRequest = async location => {
        setLoading(true);
        setError(false);
        const res = await getCity(location);
        if (!res?.Key) return;

        const data = await getLocationWeather(res.Key);
        if (!data) return;

        const fiveDaysData = await getFiveDays(res.Key);
        if (!data) return;

        getData(res, data, fiveDaysData);
    };


    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
        userCity
        
    }

}

export default useForecast

