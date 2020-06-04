import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { Alert } from 'react-native'

import ENV from '../../ENV'

export const SET_COORDINATES = "SET_COORDINATES"
export const SET_ADDRESS = "SET_ADDRESS"
export const UPDATE_COORDINATES = "UPDATE_COORDINATES"

const setLocationHandler = locationData=>{
    return{
        type : SET_COORDINATES,
        locationData
    }
}

export const updateLocationHandler = updatedLocationData=>{
    return{
        type : UPDATE_COORDINATES,
        updatedLocationData
    }
} 

const verifyPermission = async ()=>{
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
        return false
    }
    return true
}

export const fetchLocation = ()=>{
    return async dispatch =>{
        const isPermitted = await verifyPermission()
        if(!isPermitted)
            return

        try{
            let location = await Location.getCurrentPositionAsync()
            dispatch(setLocationHandler(location.coords))
        }
        catch(err){
            Alert.alert(
                'Error!!!',
                'Could not fetch location. Please try again later.',
                [
                    {
                        text : 'Ok',
                        style : 'destructive'
                    }
                ]
            )
            console.log(err);
            throw err

        }
    }
}

const setAddressHandler = address =>{
    return{
        type : SET_ADDRESS,
        address,
    }
}

const getAddress = async(coordinates)=>{
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.longitude},${coordinates.latitude}.json?access_token=${ENV.mapBoxKey}`)
        const resData = await response.json()
        return resData
}

export const fetchAddress = (coordinates)=>{
    return async dispatch =>{
        try{
            const resData = await getAddress(coordinates)
            dispatch(setAddressHandler(resData.features[0].place_name))
        }
        catch(err)
        {
            Alert.alert(
                "Error!!",
                "Could not get location name",
                [
                    {
                        text : 'Ok',
                        style :'default'
                    }
                ]
            )
            console.log(err)
            throw err
        }
    }
}