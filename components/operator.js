import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const operator = () => {
    return (
        <View style={styles.container}>
            {/* <View></View> */}
            <Text style={[styles.text,{width :25}]}>-</Text>
            <Text style={styles.text}>4</Text>
            <Text style={[styles.text,{width :25}]}>+</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
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
