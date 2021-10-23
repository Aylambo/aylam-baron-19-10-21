const getDayNames = (day) => new Date(day).toLocaleString('en-us', {
    weekday: 'long'
});
const getUpcomingDays = (days) => {
    return (

        days.slice(1).map(day => ({
            day: getDayNames(day.Date),
            maxTemp: day.Temperature.Maximum,
            minTemp: day.Temperature.Minimum,
            dayText: day.Day.IconPhrase,
            nightText: day.Night.IconPhrase,

        }))
    )
}
export default getUpcomingDays