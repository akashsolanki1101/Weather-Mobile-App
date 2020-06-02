import React,{useEffect} from 'react'

import {View,Text,StyleSheet, StatusBar,Image} from 'react-native'
// import NavigationBar from 'react-native-navbar-color'
// import changeNavigationBarColor from 'react-native-navigation-bar-color'

import Colors from '../Constants/Colors'
import DetailsCover from '../Components/DetailsCover'


const SunnyDay = props =>{
    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={Colors.sunnyDay}/>
            <DetailsCover
                dayQuote="Sunny day walk"
                location="Guna, Madhya Pradesh"
                temperature={32}
                windSpeed={10}
                humidity={45}
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