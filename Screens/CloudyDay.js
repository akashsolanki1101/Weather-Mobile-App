import React from 'react'

import {View,Text,StyleSheet,StatusBar,Image} from 'react-native'

import Colors from '../Constants/Colors'
import DetailsCover from '../Components/DetailsCover'

const CloudyDay = props =>{
    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={Colors.cloudyDay}/>
            <DetailsCover
                dayQuote="Sun under the clouds"
                location="Pune, Maharashtra"
                temperature={32}
                windSpeed={10}
                humidity={45}
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