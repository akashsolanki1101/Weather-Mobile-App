import React from 'react'

import {View,Text,StyleSheet,Image,FlatList} from 'react-native'
import {Feather,Entypo,MaterialIcons} from '@expo/vector-icons'

import Card from './Card'
// import Colors from '../Constants/Colors'

const DetailsCover = props =>{
    return(
        <View style={styles.container}>
            <View style={styles.details}>
                <View style={styles.topBox}>
                    <View style={styles.dayType}>
                        <Text style={styles.dayTypeText}>{props.weatherData.summary}</Text>
                    </View>
                    <View style={styles.mapIcon}>
                        <Feather name='map' color={'white'} size={25} onPress={props.showMapHandler}/>
                        <MaterialIcons name='my-location' color={'white'} size={28} onPress={props.getMyLocation}/>                        
                    </View>
                </View> 
                <View style={styles.imageBox}>
                    {props.children}
                </View>
                <View style={styles.bottomBox}>
                    <View style={styles.location}>
                        <Entypo name='location-pin' color={'white'} size={25}/>
                        <Text style={styles.locationText} numberOfLines={1}>{props.locationAddress}</Text>
                    </View>
                    <View style={styles.weatherData}>
                        <Text style={styles.temperatureValue}>{Math.ceil(props.weatherData.temperature)}°</Text>
                        <FlatList 
                            keyExtractor={item => item.title}
                            horizontal={true}
                            data={props.weatherData.otherFactors}
                            renderItem={object=>{
                                return <Card 
                                title={object.item.title}
                                data={object.item.value}/>
                            }}
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
        height : 85,
        paddingTop : 10,
        justifyContent : 'space-around'
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
    },
    imageBox:{
        // borderWidth : 1,
        width : '80%',
        alignItems : 'center',
        justifyContent :'center'
    }
})

export default DetailsCover