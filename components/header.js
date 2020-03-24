import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';


export default function Header() {
return (
		<View style={styles.container}>
			<View style={styles.headingBG}>
				<Text style={styles.heading}>Food Delivers</Text>
			</View>
			{/* <TextInput style = {styles.input}
			underlineColorAndroid = "transparent"
			placeholder = "Search Food,General Items, Dairy Products etc..."
			placeholderTextColor = "gray"
			autoCapitalize = "none"
			// onChangeText = {this.handleEmail}
			/> */}
		</View>
);
}

const styles = StyleSheet.create({
	input: {
		marginLeft: 3,
		marginRight : 3,
	  padding:8,
	  height: 40,
	  borderWidth: 1
  },
  headingBG: {
		backgroundColor : "red"
  },
  heading : {
	  padding : 6,
	  marginTop: 32,
	  fontSize: 30,
	  textAlign: "center",
	  color: "white"
  }
 });