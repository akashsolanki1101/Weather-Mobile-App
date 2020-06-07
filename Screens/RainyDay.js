import React from 'react'

import {View,StyleSheet,StatusBar,Image} from 'react-native'

import Colors from '../Constants/Colors'
import DetailsCover from '../Components/DetailsCover'


const RainyDay = props =>{
    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={Colors.rainyDay}/>
            <DetailsCover
                locationAddress={props.address}
                weatherData={props.weatherData}
                showMapHandler={props.showMapHandler}
                getMyLocation={props.getMyLocationHandler}
                showFutureDataHandler={props.showFutureDataHandler}

            ><Image source={require('../assets/Images/Raining3.png')} style={styles.image}/></DetailsCover>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.rainyDay,
        paddingVertical : 30
    },
    image:{
        width : 450,
        height : 450,
    }
})

export default RainyDay