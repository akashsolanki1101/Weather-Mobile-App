import React,{useState} from 'react'

import {View,StyleSheet,StatusBar} from 'react-native'
import {useDispatch} from 'react-redux'
import MapView,{Marker} from 'react-native-maps'
import {Ionicons} from '@expo/vector-icons'

import Colors from '../Constants/Colors'
import {updateLocationHandler,fetchAddress} from '../Store/Actions/Location'
import {fetchWeatherData} from '../Store/Actions/Weather'

const MapScreen = props =>{
    const [selectedLocation,setSelectedLocation] = useState({
        latitude : props.lat ? props.lat : null,
        longitude : props.long ? props.long : null
    })

    const dispatch = useDispatch()

    const mapRegion = {
        latitude : selectedLocation.latitude,
        longitude : selectedLocation.longitude,
        latitudeDelta : 0.0922,
        longitudeDelta : 0.0421,
    }

    const selectedLocationHandler = event =>{
        setSelectedLocation({
            latitude : event.nativeEvent.coordinate.latitude,
            longitude : event.nativeEvent.coordinate.longitude
        })
        
    }

    const goingBackHandler = ()=>{
        dispatch(updateLocationHandler(selectedLocation))
        dispatch(fetchAddress(selectedLocation))
        dispatch(fetchWeatherData(selectedLocation.latitude,selectedLocation.longitude))
        props.showMapHandler()
    }

    let markersCoordinates

    if(selectedLocation)
    {
        markersCoordinates = {
            latitude : selectedLocation.latitude,
            longitude : selectedLocation.longitude
        }
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.color2}/>
            <MapView region={mapRegion} style={styles.map} onPress={selectedLocationHandler} showsMyLocationButton={true} >
                {
                    markersCoordinates&&<Marker title="Picked Location" coordinate={markersCoordinates}/>
                }
            </MapView>
            <View style={styles.backArrow}>
                <Ionicons name="md-arrow-back" size={25} onPress={goingBackHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1 
    },
    map:{
        flex : 1
    },
    backArrow :{
        position : 'absolute',
        top : 20,
        left: 20,
        zIndex : 10,
        width : 50,
        height : 50,
        borderRadius : 25,
        backgroundColor : 'white',
        elevation : 5,
        justifyContent : 'center',
        alignItems : 'center',
        
    }
})

export default MapScreen 