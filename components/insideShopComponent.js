import React from 'react'
import {Text, View,StyleSheet} from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import Quantity from "../components/quantity"

export default function insideShopComponent(props) {
	return (
		<TouchableOpacity activeOpacity={0.9}>
			
			<View style={styles.container}>
				<Text style={styles.item}>{props.item}</Text>
				<View style={{textAlign : "right",display:"flex"}}>

						<View style={styles.quantityAndPrice}>
							<Quantity quantity={props.pieceQty} display={props.pieceQty}/>
							<TouchableOpacity activeOpacity={0.7} onPress={props.perPiecePress}>
								<Text style={[styles.price,styles.piece]}>{props.piece[0]} = Rs. {props.piece[1]}</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.quantityAndPrice}>
							<Quantity  quantity={props.packetQty} display={props.packetQty}/>
							<TouchableOpacity activeOpacity={0.7} onPress={props.packetPress}>
								<Text style={[styles.price,props.packet[0] == undefined && {display : "none"} ]} >{props.packet[0]} = Rs {props.packet[1]}</Text>
							</TouchableOpacity>
						</View>

				</View>
			</View>

		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container : {
		// display : "flex",
		borderColor :  "rgba(172, 172, 172, 0.253)",
		borderBottomWidth : 2,
	},
	item : {
		fontSize : 17,
		letterSpacing : 0.25,
		fontWeight : "500"
	},
	price:{
		paddingHorizontal:7,
		paddingTop:2,
		paddingBottom : 4,
		fontSize : 15,
		textAlign : "center",
		alignSelf : "flex-end",
		borderRadius : 3,
		backgroundColor : "rgba(172, 172, 172, 0.253)",
	},
	piece:{
		marginBottom : 5,
	},
	quantityAndPrice : {
		alignSelf : "flex-end",
		display : "flex",
		flexDirection : "row"
	},

})
