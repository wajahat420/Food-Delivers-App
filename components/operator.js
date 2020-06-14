import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const operator = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>props.pressed("dec")}>
                <Text style={[styles.text,{width:25}]}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.99}>
                <Text style={[styles.text]}>{props.quantity}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.pressed("inc")}>
                <Text style={[styles.text,{width:25}]}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // display: "flex",
        flexDirection : "row"
    },
    text : {
        marginHorizontal : 3,
        textAlign : "center",
        borderColor : "red",
        borderWidth :3,
        // paddingVertical : 2,
        paddingHorizontal : 5,
        fontSize : 20,
    }
})
export default operator
