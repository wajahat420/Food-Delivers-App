import React from 'react'
import { TextInput ,StyleSheet} from 'react-native'

export default function insideShopInput(props) {
	return (

		<TextInput style = {[styles.input,styles[props.display]]}
			underlineColorAndroid = "transparent"
			placeholder = {props.placeholder}
			placeholderTextColor = "rgba(132, 132, 130, 0.553)"
			autoCapitalize = "none"
			// onChangeText = {this.handleEmail}
		/>	)
}

const styles = StyleSheet.create({
		input: {
			paddingHorizontal : 20,
			fontSize : 16,
			marginVertical : 15,
			marginHorizontal: 19,
			paddingVertical:9,
			borderWidth: 2,
			borderColor : "rgba(132, 132, 130, 0.593)"
	  },
	  display  :{
		display : "none"
	  }
})
