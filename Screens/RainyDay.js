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
                dayQuote="It's raining now"
                location="Himachal Pradesh, India"
                temperature={32}
                windSpeed={10}
                humidity={45}
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
        // zIndex : 10,
    }
})

export default RainyDay