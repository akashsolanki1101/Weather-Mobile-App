import React,{useState,useEffect} from 'react';

import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {AppLoading} from 'expo'
import * as Fonts from 'expo-font'
import ReduxThunk from 'redux-thunk'
// import { StyleSheet, Text, View} from 'react-native';

// import CloudyDay from './Screens/CloudyDay';
// import SunnyDay from './Screens/SunnyDay';
// import RainyDay from './Screens/RainyDay';
// import LocationPicker from './Components/LocationPicker';
// import GetWeatherData from './Components/GetWeatherData'
// import MapScreen from './Screens/Map'
// import ENV from './ENV'
import Location from './Store/Reducers/Location'
import Weather from './Store/Reducers/Weather'

import ScreenHandler from './Components/ScreenHandler'

const App = ()=>{
  const [isLoaded,setIsloaded] = useState(false)

  const rootReducer = combineReducers({
    location : Location,
    weather : Weather
  })

  const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

  const fetchFonts = ()=>{
    return Fonts.loadAsync({
      'Dosis' : require('./assets/Fonts/Dosis-VariableFont_wght.ttf'),
      'Open Sans-Bold' : require('./assets/Fonts/OpenSansCondensed-Bold.ttf'),
      'Open Sans-Light' : require('./assets/Fonts/OpenSansCondensed-Light.ttf') 
    }
  )}

  if(!isLoaded)
  {
    return <AppLoading 
            startAsync={fetchFonts} 
            onFinish={()=>setIsloaded(true)}/>
  }
  
  return (
    <Provider store={store}>
        <ScreenHandler />
    </Provider>
  )
}


export default App
