import React,{useState, useEffect} from 'react';

import { StyleSheet, Text, View} from 'react-native';
import {AppLoading} from 'expo'
import * as Fonts from 'expo-font'

import CloudyDay from './Screens/CloudyDay';
import SunnyDay from './Screens/SunnyDay';
import RainyDay from './Screens/RainyDay';
import LocationPicker from './Components/LocationPicker';
import GetWeatherData from './Components/GetWeatherData'

export default function App() {
  const [isLoaded,setIsloaded] = useState(false)
  const [coordinates,setCoordinates] = useState(null)
  const [weatherInfo,setWeatherInfo]  = useState()
  
  const fetchLocation = coords =>{
    setCoordinates(coords)
  }

  const fetchWeatherData = data =>{
    setWeatherInfo(data)
  }

  const fetchFonts = ()=>{
    return Fonts.loadAsync({
      'Dosis' : require('./assets/Fonts/Dosis-VariableFont_wght.ttf'),
      'Open Sans-Bold' : require('./assets/Fonts/OpenSansCondensed-Bold.ttf'),
      'Open Sans-Light' : require('./assets/Fonts/OpenSansCondensed-Light.ttf') 
    })}
  if(!isLoaded)
  {
    return <AppLoading 
            startAsync={fetchFonts} 
            onFinish={()=>setIsloaded(true)}/>
  }
  return (
    
    <View style={styles.container}>
      {
        coordinates!==null ? <GetWeatherData long={coordinates.long} lat={coordinates.lat} fetchWeatherData={fetchWeatherData}/> : null
      }
      <LocationPicker fetchLocation={fetchLocation}/>
      <CloudyDay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
