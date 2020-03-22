import React from 'react'
import {Text, View,StyleSheet} from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function insideShopComponent(props) {
	return (
		<TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
			
			<View style={styles.container}>
				<Text style={styles.item}>{props.item}</Text>
				<Text style={styles.price}>Rs. {props.price}</Text>
				<Text style={styles.price} >Packet = Rs. 200</Text>
			</View>

		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container : {
		display : "flex",
		flexDirection :"column",
		borderColor :  "rgba(172, 172, 172, 0.253)",
		borderBottomWidth : 2,
		padding : 4,


	},
	item : {
		fontSize : 17,
		letterSpacing : 0.25,
		
		fontWeight : "700"
	},
	price:{
		fontSize : 17,
		textAlign : "right",
		justifyContent : "flex-end",
		// flex : 1
	}
})
