import ENV from '../../ENV'

export const SET_WEATHER_DATA = "SET_WEATHER_DATA"

const setWeatherDataHandler = ({currently,hourly})=>{
    return{
        type : SET_WEATHER_DATA,
        currently,
        hourly,
    }
}

export const fetchWeatherData = (lat,long)=>{
    return async dispatch=>{
        try{
            const response = await fetch(`https://api.darksky.net/forecast/${ENV.darkSkyKey}/${lat},${long}?exclude=minutely,daily&units=si`)
            const resData = await response.json()
            dispatch(setWeatherDataHandler(resData))
        }
        catch(err){
            console.log(err)
            throw err
        }
    }
}