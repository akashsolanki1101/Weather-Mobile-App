import React,{useEffect} from 'react'

import {View,Text,StyleSheet, StatusBar,Image} from 'react-native'
// import NavigationBar from 'react-native-navbar-color'
// import changeNavigationBarColor from 'react-native-navigation-bar-color'

import Colors from '../Constants/Colors'
import Card from '../Components/Card'
import DetailsCover from '../Components/DetailsCover'


const SunnyDay = props =>{


    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={Colors.sunnyDay}/>
            <Image source={require('../assets/Images/Sun-With-Shadow4.png')} style={styles.image}/>
            <DetailsCover
                dayQuote="Sunny day walk"
                location="Guna, Madhya Pradesh"
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
        backgroundColor : Colors.sunnyDay,
        paddingVertical : 30,
    },
    image:{
        position : 'absolute',
        top :110,
        left : -40,
        width : 500,
        height : 600,
        zIndex : 10,
    }
})

export default SunnyDay