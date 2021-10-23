
const getCurrentDayForecast = (data, cityName) => {
  return {
      location: cityName,
      weatherText: data.WeatherText,
      temperature: data.Temperature,
      icon: data.WeatherIcon,
      isDayTime: data.IsDayTime,
      isFavorite: false,
    }  


}

export default getCurrentDayForecast
