import React,{useState,useEffect} from 'react'

import {View,Text,StyleSheet,ActivityIndicator} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'

import CloudyDay from '../Screens/CloudyDay';
import SunnyDay from '../Screens/SunnyDay';
import RainyDay from '../Screens/RainyDay';
import MapScreen from '../Screens/Map'
import {fetchLocation,fetchAddress} from '../Store/Actions/Location'
import {fetchWeatherData} from '../Store/Actions/Weather'

const ScreenHandler = props=>{
    const [showMap,setShowMap] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState()

    const locationData = {
       latitude :  useSelector(state => state.location.latitude),
       longitude : useSelector(state => state.location.longitude),
       address : useSelector(state => state.location.address)
    }
    console.log('Check',locationData);
    

    const weatherData = {
        icon : useSelector(state => state.weather.icon),
        summary : useSelector(state => state.weather.summary),
        temperature : useSelector(state => state.weather.temperature),
        otherFactors :[
            {title : 'Humidity',value : useSelector(state => state.weather.humidity)},
            {title : 'Wind Speed'  ,value:useSelector(state => state.weather.windSpeed)},
            {title : 'Visibility' ,value : useSelector(state => state.weather.visibility)},
            {title : 'UV-Index' ,value: useSelector(state => state.weather.uvIndex)},
        ]
    }

    const showMapHandler = ()=>{
        setShowMap(!showMap)
    }

    const dispatch = useDispatch()

    const loadOtherData = async ()=>{
        dispatch(fetchAddress({latitude : locationData.latitude,longitude : locationData.longitude}))
        await dispatch(fetchWeatherData(locationData.latitude,locationData.longitude))
        setIsLoading(false)
    }

    useEffect(()=>{
        const loadLocation = async ()=>{
            try{
                setIsLoading(true)
                await dispatch(fetchLocation())
            }
            catch(err)
            {
                setErrorMessage(err)
                setIsLoading(false)
            }
        }
        loadLocation()  
    },[dispatch])

    if(locationData.latitude & locationData.longitude)
    {
        loadOtherData()
    }

    if(isLoading)
    {
        return(
            <View style={styles.loader}>
                <ActivityIndicator size={50}/>
            </View>
        ) 
    }
    if(errorMessage)
    {
        return null;
    }

    if(showMap)
    {
        return <MapScreen lat={locationData.latitude} long ={locationData.longitude} showMapHandler={showMapHandler}/>
    }

    if(weatherData.summary && weatherData.icon)
    {
        if(weatherData.summary.includes('cloud')|| weatherData.summary.includes('Cloud') || weatherData.icon.includes('cloud') || weatherData.icon.includes('Cloud'))
        {
            return(
                <View style={styles.container}> 
                    <CloudyDay weatherData={weatherData} address={locationData.address} showMapHandler={showMapHandler}/>
                </View>
            )
        }
        else if(weatherData.summary.includes('rain')|| weatherData.summary.includes('Rain') || weatherData.icon.includes('rain') || weatherData.icon.includes('Rain'))
        {
            return(
                <View style={styles.container}> 
                    <RainyDay weatherData={weatherData} address={locationData.address} showMapHandler={showMapHandler}/>
                </View>
            )
        }

        else if(weatherData.summary.includes('sun')|| weatherData.summary.includes('Sun') || weatherData.icon.includes('sun') || weatherData.icon.includes('Sun'))
        {
            return(
                <View style={styles.container}> 
                    <SunnyDay weatherData={weatherData} address={locationData.address} showMapHandler={showMapHandler}/>
                </View>
            )
        }
    }

    return(
        <View style={styles.container}>
            <Text>Sorry day type doesn't match </Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
    },
    loader :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
    
})

export default ScreenHandler;
