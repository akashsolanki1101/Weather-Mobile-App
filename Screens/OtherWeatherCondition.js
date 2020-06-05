import React from 'react'

import {View,StyleSheet,StatusBar} from 'react-native'

import Colors from '../Constants/Colors'
import DetailsCover from '../Components/DetailsCover'

const OtherWeatherCondition = props =>{

    

    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={Colors.color1}/>
            <DetailsCover
                locationAddress={props.address}
                weatherData={props.weatherData}
                showMapHandler={props.showMapHandler}
                getMyLocation={props.getMyLocationHandler}
                showFutureDataHandler={props.showFutureDataHandler}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.color1,
        paddingVertical : 30
    },
})

export default OtherWeatherCondition