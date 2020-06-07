import React from 'react'

import {View,Text,StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import {Entypo} from '@expo/vector-icons'

import Card from '../Components/Card'

const  FutureForecast = props =>{
    const time = useSelector(state=> state.weather.currently.time)
    const hourlyData = useSelector(state => state.weather.hourly)
    const address = useSelector(state => state.location.address)

    return(
        <View style={styles.container}>
            <View style={styles.weatherInfo}>
                <View style={styles.topBar}>
                    <View style={styles.backArrow}>
                        <Entypo name="cross" size={40} onPress={props.showFutureDataHandler} color={'white'}/>
                    </View>
                    <Text style={styles.time}>At {(time.getHours()>12?time.getHours()-12:time.getHours())+1} : {time.getMinutes()}</Text>
                </View>
                <Text style={styles.temperature}>{Math.ceil(hourlyData.temperature)}°</Text>
                <View style={styles.cards}>
                    <Card
                        style={styles.card}
                        title='Humidity'
                        data={hourlyData.humidity}
                    />
                    <Card
                        style={styles.card}
                        title='Wind Speed'
                        data={hourlyData.windSpeed}
                    />
                    <Card
                        style={styles.card}
            
                        title='UV-Index'
                        data={hourlyData.uvIndex}
                    />
                    <Card
                        style={styles.card}
                        title='Visibility'
                        data={hourlyData.visibility}
                    />
                </View>
                <Text style={styles.summary}>{hourlyData.summary}</Text>
            </View>
            <View style={styles.addressBox}>
                <Text style={styles.addressText}>{address}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display : "flex",
        justifyContent : 'space-between',
        position : "absolute",
        left : 115,
        height : '100%',
        width : '72%',
        backgroundColor : '#rgba(0, 0, 0, .4)',
        elevation : 5,
        padding : 20,
    
    },
    topBar:{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
    },
    backArrow:{
        width:40,
        zIndex : 10,
    },
    time:{
        color : 'white',
        fontSize : 20,
        fontWeight : '700',
        marginLeft : 50,
    },
    temperature :{
        color:'white',
        fontSize : 80,
    },
    cards:{
        marginTop : 15,
        display : 'flex',
    },
    card:{
        marginBottom : 10,
        width : '80%',
    },
    summary :{
        color:'white',
        fontSize : 30,
    },
    addressBox:{
        borderTopWidth : 2,
        borderTopColor : 'white',
        padding : 10,
    },
    addressText:{
        color : 'white',
        fontSize : 20,
        fontWeight : '700'
    },

})

export default FutureForecast;