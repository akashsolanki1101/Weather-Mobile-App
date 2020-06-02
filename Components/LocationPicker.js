import React,{useEffect,useState,useCallback} from 'react'

import {View,Text,StyleSheet,Alert} from 'react-native'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'


const LocationPicker = props =>{
    const [location,setLocation] = useState()
    const [errorMessage,setErrorMessage] = useState(false) 

    const verifyPermission = useCallback( async ()=>{
        const result = await Permissions.askAsync(Permissions.LOCATION)
        if(result.status!=='granted')
        {
            Alert.alert(
                'Error',
                'Permission denied to access location!!',
                [
                    {
                        text : 'Ok',
                        style : 'default'
                    }
                ]
            )
            setErrorMessage('Permission to access location was denied')
            return false
        }
        return true
    },[setErrorMessage])

    const getLocationHandler =useCallback(async ()=>{
        const hasPermission = await verifyPermission();
        if(!hasPermission)
        {
            return;
        }
        try{
            let location = await Location.getCurrentPositionAsync({timeout : 5000})
            setLocation(location)
            props.fetchLocation({
                long : location.coords.longitude,
                lat : location.coords.latitude
            })
        }
        catch(err){
            setErrorMessage(err)
            Alert.alert(
                'Error!!!',
                'Could not fetch location. Please try again later or select a location on map',
                [
                    {
                        text : 'Ok',
                        style : 'destructive'
                    }
                ]
            )}
    },[verifyPermission,setLocation,setErrorMessage])

    useEffect(()=>{
        getLocationHandler()
},[getLocationHandler])



    return null;

}

export default LocationPicker