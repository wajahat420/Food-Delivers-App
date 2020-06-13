import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default function Quantity(props) {
    
        return (
            <View style={styles.bg}>
                <Text style={[styles.quantity,props.display == 0 ? {display:"none"}:{display:"flex"}    ]}> {props.quantity} </Text>
            </View>
        )
   
}

styles  = StyleSheet.create({
    bg : {
        height : 25,
        backgroundColor : "red",
        marginRight : 3,
        // marginBottom : 5,
        borderRadius : 30
    },
    quantity : {
        color :"white",
        paddingTop : 2
    }
})