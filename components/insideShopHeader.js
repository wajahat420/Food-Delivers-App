import React from 'react'
import { Text,View ,StyleSheet} from 'react-native'

export default function insideShopHeader() {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Anti Shop</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		justifyContent : "center",
		height : 85,
		borderColor : "red",
		borderWidth:2,
		// backgroundColor : "red"
	},
	heading:{
		fontSize:23,
		paddingTop: 30,
		textAlign : "center"
	}
})
