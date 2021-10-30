
const getCurrentDayForecast = (data, cityName, id) => {
  return {
      location: cityName,
      weatherText: data.WeatherText,
      temperature: data.Temperature,
      icon: data.WeatherIcon,
      isDayTime: data.IsDayTime,
      isFavorite: false,
      _id: id
    }  


}

export default getCurrentDayForecast
