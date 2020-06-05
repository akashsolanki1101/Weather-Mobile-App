import React from 'react'

import {View,Text,StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import {Ionicons} from '@expo/vector-icons'

import Colors from '../Constants/Colors'

const  FutureForecast = props =>{
    const hourlyData = useSelector(state => state.weather.hourly)
    const address = useSelector(state => state.location.address)

    return(
        <View style={styles.container}>
            <View style={styles.backArrow}>
                <Ionicons name="md-arrow-back" size={25} onPress={props.showFutureDataHandler}/>
            </View>
            <Text>Future Forecast</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position : "absolute",
        left : 115,
        height : '100%',
        width : 300,
        backgroundColor : Colors.color1,
        opacity : .8,
        elevation : 20,
        padding : 10
    }
})

export default FutureForecast;