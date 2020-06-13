import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

import Operator from "./operator"
const cartDetails = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20,marginBottom:3}}>Prince</Text>

            <View >
                <View style={styles.item}>  
                    <Operator />
                    <Text style={[styles.itemName,{fontSize:18}]}>Piece</Text>
                    <Text style={styles.itemPrice }>Rs. 20</Text>
                </View>
                <View style={styles.item}>  
                    <Operator/>
                    <Text style={[styles.itemName,{fontSize:18}]}>Packet</Text>
                    <Text style={styles.itemPrice }>Rs. 20</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginVertical : 25,
        marginHorizontal : 12
    },
    item : {
        // marginHorizontal :4,
        display : "flex",
        flexDirection : "row",
        margin : 4
        // alignSelf: "flex-end"
    },
    itemName :{
        paddingLeft : 12
    },
    itemPrice : {
        position: "absolute",
        right: 0,
        fontSize : 16
    }
})

export default cartDetails
