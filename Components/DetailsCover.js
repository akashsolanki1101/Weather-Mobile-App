import React,{useState} from 'react'

import {View,Text,StyleSheet,FlatList} from 'react-native'
import {Feather,Entypo,MaterialIcons} from '@expo/vector-icons'
import {useDispatch,useSelector} from 'react-redux'

import Card from './Card'
import {fetchLocation,fetchAddress} from '../Store/Actions/Location'
import {fetchWeatherData} from '../Store/Actions/Weather'

const DetailsCover = props =>{
    const [isFetched,settIsfetched] = useState(false)
    const [location,setLocation] = useState({
        latitude : useSelector(state=>state.location.latitude),
        longitude : useSelector(state=>state.location.longitude)
    })

    const dispatch = useDispatch()

    const fetchMyLocationHandler=async()=>{
        await dispatch(fetchLocation())
        settIsfetched(true)
    }

    const fetchOtherData=async()=>{
        await fetchMyLocationHandler()
        if(isFetched)
        {
            dispatch(fetchAddress(location))
            dispatch(fetchWeatherData(location.latitude,location.longitude))
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.details}>
                <View style={styles.topBox}>
                    <View style={styles.dayType}>
                        <Text style={styles.dayTypeText}>{props.weatherData.summary}</Text>
                    </View>
                    <View style={styles.icons}>
                        <Feather name='map' color={'white'} size={25} onPress={props.showMapHandler}/>
                        <MaterialIcons name='my-location' color={'white'} size={28} onPress={fetchOtherData}/>
                        <Feather name='chevron-right' color={'white'} size={30} onPress={props.showFutureDataHandler}/>
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
        // borderWidth : 1
    },
    dayTypeText:{
        fontSize : 30,
        color : '#fff',
        textAlign : 'justify'
    },
    icons:{
        height : 130,
        paddingTop : 10,
        justifyContent : 'space-between',
        // borderWidth : 1
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
        display:'flex',
        alignItems : 'center',
        // justifyContent :'center'
    }
})

export default DetailsCover