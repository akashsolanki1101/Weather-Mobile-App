import React from 'react'

import {View,StyleSheet, StatusBar,Image} from 'react-native'

import Colors from '../Constants/Colors'
import DetailsCover from '../Components/DetailsCover'


const SunnyDay = props =>{
    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={Colors.sunnyDay}/>
            <DetailsCover
                locationAddress={props.address}
                weatherData={props.weatherData}
                showMapHandler={props.showMapHandler}
                getMyLocation={props.getMyLocationHandler}
                showFutureDataHandler={props.showFutureDataHandler}
            ><Image source={require('../assets/Images/Sun-With-Shadow4.png')} style={styles.image}/></DetailsCover>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.sunnyDay,
        paddingVertical : 30,
    },
    image:{
        width : 500,
        height : 500,
        // zIndex : 10,
    }
})

export default SunnyDay