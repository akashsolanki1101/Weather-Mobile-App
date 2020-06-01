import React from 'react'

import {View,Text,StyleSheet} from 'react-native'

const Card = props =>{
    return(
        <View style={styles.card}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <Text style={styles.data}>
                {props.data}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        height : 70,
        backgroundColor : '#fff',
        paddingHorizontal : 15,
        paddingVertical:10,
        marginLeft : 20,
        justifyContent : 'space-around'
    },
    title :{
        fontSize : 15,
        color :'#rgba(0, 0, 0, .3)',
        fontWeight : 'bold'
    },
    data:{
        fontSize : 25,
        color :'#rgba(0, 0, 0, .5)',
        fontWeight : 'bold'
    }
})

export default Card