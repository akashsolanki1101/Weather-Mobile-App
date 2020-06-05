import {SET_WEATHER_DATA} from '../Actions/Weather'

const initialState = {
    currently:{
        summary : '',
        temperature : null,
        humidity : null,
        windSpeed : null,
        visibility : null,
        uvIndex : null,
        icon : null
    },
    hourly:{
        summary : '',
        temperature : null,
        humidity : null,
        windSpeed : null,
        visibility : null,
        uvIndex : null,
    },

}

const reducer = (state = initialState , action)=>{
    switch(action.type)
    {
        case SET_WEATHER_DATA:
            const currentlyData = {
                summary : action.currently.summary,
                temperature : action.currently.temperature,
                humidity : action.currently.humidity,
                windSpeed : action.currently.windSpeed,
                visibility : action.currently.visibility,
                uvIndex : action.currently.uvIndex,
                icon : action.currently.icon
            }
            const hourlyData = {
                summary : action.hourly.summary,
                temperature : action.hourly.temperature,
                humidity : action.hourly.humidity,
                windSpeed : action.hourly.windSpeed,
                visibility : action.hourly.visibility,
                uvIndex : action.hourly.uvIndex,
            }

            return{
                ...state,
                currently : currentlyData,
                hourly : hourlyData,
            }
        
        default :
            return state
    }
}

export default reducer