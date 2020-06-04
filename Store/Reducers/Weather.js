import {SET_WEATHER_DATA} from '../Actions/Weather'

const initialState = {
    summary : '',
    temperature : null,
    humidity : null,
    windSpeed : null,
    visibility : null,
    uvIndex : null,
    icon : null
}

const reducer = (state = initialState , action)=>{
    switch(action.type)
    {
        case SET_WEATHER_DATA:
            return{
                ...state,
                summary : action.weatherData.summary,
                temperature : action.weatherData.temperature,
                humidity : action.weatherData.humidity,
                windSpeed : action.weatherData.windSpeed,
                visibility : action.weatherData.visibility,
                uvIndex : action.weatherData.uvIndex,
                icon : action.weatherData.icon
            }
        
        default :
            return state
    }
}

export default reducer