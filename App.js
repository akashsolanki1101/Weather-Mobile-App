import React,{useState} from 'react';

import { StyleSheet, Text, View} from 'react-native';
import {AppLoading} from 'expo'
import * as Fonts from 'expo-font'

import CloudyDay from './Screens/CloudyDay';
import SunnyDay from './Screens/SunnyDay';
import RainyDay from './Screens/RainyDay';

export default function App() {
  const [isLoaded,setIsloaded] = useState(false)

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
      <CloudyDay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
