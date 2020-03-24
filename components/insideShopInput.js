import React from 'react'
import { TextInput ,StyleSheet} from 'react-native'

export default function insideShopInput() {
	return (

		<TextInput style = {styles.input}
			underlineColorAndroid = "transparent"
			placeholder = "Search items in this shop"
			placeholderTextColor = "rgba(132, 132, 130, 0.553)"
			autoCapitalize = "none"
			// onChangeText = {this.handleEmail}
		/>	)
}

const styles = StyleSheet.create({
		input: {
			fontSize : 16,
			margin : 15,
			marginHorizontal: 19,
			padding:9,
			borderWidth: 2,
			borderColor : "rgba(132, 132, 130, 0.593)"
	  }
})
