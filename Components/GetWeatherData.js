import React,{useState,useCallback,useEffect} from 'react'


import Keys from '../Constants/APIkey'

const GetWeatherData = (props)=>{
    const [weatherData,setWeatherData] = useState()

    const {lat,long} = props

    const fetchData = useCallback(async()=>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid==${Keys.WeatherAPIKey}`)
        const resData = await response.json()
        console.log('Hello1',resData);
        setWeatherData(resData)
        props.fetchWeatherData(resData)

    },[lat,long])

    useEffect(()=>{
        try{
            fetchData()
        }
        catch(err)
        {
            console.log(err)
        }
    },[fetchData])    

    return null;
}

export default GetWeatherData;