import React from 'react'

import {View,Text,StyleSheet,StatusBar,Image} from 'react-native'

import Colors from '../Constants/Colors'
import DetailsCover from '../Components/DetailsCover'


const RainyDay = props =>{
    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={Colors.rainyDay}/>
            <Image source={require('../assets/Images/Raining3.png')} style={styles.image}/>
            <DetailsCover
                dayQuote="It's raining now"
                location="Himachal Pradesh, India"
                temperature={32}
                windSpeed={10}
                humidity={45}
            />
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
        position : 'absolute',
        top :150,
        left : -40,
        width : 500,
        height : 500,
        zIndex : 10,
    }
})

export default RainyDay