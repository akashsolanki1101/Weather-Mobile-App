import React from 'react'

import {View,Text,StyleSheet,StatusBar} from 'react-native'
import {Feather,Entypo} from '@expo/vector-icons'

import Card from './Card'
// import Colors from '../Constants/Colors'


const DetailsCover = props =>{
    return(
        <View style={styles.container}>
            <View style={styles.details}>
                <View style={styles.topBox}>
                    <View style={styles.dayType}>
                        <Text style={styles.dayTypeText}>{props.dayQuote}</Text>
                    </View>
                    <View style={styles.mapIcon}>
                        <Feather name='map' color={'white'} size={25}/>
                    </View>
                </View> 
                <View style={styles.bottomBox}>
                    <View style={styles.location}>
                        <Entypo name='location-pin' color={'white'} size={25}/>
                        <Text style={styles.locationText} numberOfLines={1}>{props.location}</Text>
                    </View>
                    <View style={styles.weatherData}>
                        <Text style={styles.temperatureValue}>{props.temperature}°</Text>
                        <Card 
                            title="Wind"
                            data={`${props.windSpeed}km/h`}/>
                        <Card
                            title="Humidity"
                            data={`${props.humidity}%`} 
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    details:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    topBox:{
        width : '85%',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    dayType :{ 
        width : '40%',
    },
    dayTypeText:{
        fontSize : 30,
        color : '#fff',
        textAlign : 'justify'
    },
    mapIcon:{
        paddingTop : 10
    },
    bottomBox :{
        width : '90%',
        height : '20%',
    },
    location:{
        flexDirection : 'row',
        alignItems : 'center'
    },
    locationText :{
        color : 'white',
        fontSize : 30,
    },
    weatherData:{
        flexDirection : 'row',
        paddingLeft:20,
        alignItems : 'center',
    },
    temperatureValue:{
        color : 'white',
        fontSize : 70,
    }
})

export default DetailsCover