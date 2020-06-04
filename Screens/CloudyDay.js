import React from 'react'

import {View,StyleSheet,StatusBar,Image} from 'react-native'
import {useSelector} from 'react-redux' 

import Colors from '../Constants/Colors'
import DetailsCover from '../Components/DetailsCover'

const CloudyDay = props =>{

    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={Colors.cloudyDay}/>
            <DetailsCover
                locationAddress={props.address}
                weatherData={props.weatherData}
                showMapHandler={props.showMapHandler}
                getMyLocation={props.getMyLocationHandler}
            ><Image source={require('../assets/Images/Cloudy.png')} style={styles.image}/></DetailsCover>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.cloudyDay,
        paddingVertical : 30
    },
    image:{
        width : 450,
        height : 450,
        zIndex : 10,
    }
})

export default CloudyDay