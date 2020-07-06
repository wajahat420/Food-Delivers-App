import React from 'react'
import { TextInput ,StyleSheet} from 'react-native'

// import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

// export default class textInput extends Component {
// 	render() {

// 	}
// }

export default function insideShopInput(props) {
	return (
		<View style={{display:"flex"}}>
			<TextInput style = {[styles.input,styles[props.display]]}
				underlineColorAndroid = "transparent"
				placeholder = {props.placeholder}
				placeholderTextColor = "rgba(132, 132, 130, 0.553)"
				autoCapitalize = "none"
				onChangeText = {props.onChangeText}
				onResponderStart = {props.focus}
			/>	
			<TouchableOpacity onPress={props.searchPress} activeOpacity={0.6} 
				style={[styles.search,{display:props.clickDisplay}]}>

				<AntDesign style={{alignSelf:"center"}}  name="search1" size={25} color="red"/>
				
			</TouchableOpacity>
		</View>
		
	)
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
	  },
	  search : {
		textAlign : "center",
		// paddingRight:12,
		// paddingTop : 3,
	  }
})
