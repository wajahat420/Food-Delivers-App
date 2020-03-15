import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Footer extends Component {
	state = {
		currentClick : ""
	}
	clicked(directTO){
		this.setState({currentClick : directTO})
	}
	render(){
		// console.warn(this.state.currentClick)
		return(
			<View style={styles.container}>

				<TouchableOpacity onPress={()=>this.clicked("home")} style={styles.one}>
					<FontIcon style={[styles.center, this.state.currentClick == "home" ? styles.change:styles.notChange]} name="home" size={40} color={this.state.currentClick == "home" ? "white":"gray"}  />
				</TouchableOpacity>

				<TouchableOpacity onPress={()=>this.clicked("cart")} style={styles.one}>
					<AntDesign style={[styles.center, this.state.currentClick == "cart" ? styles.change:styles.notChange]} name="shoppingcart" size={40} color={this.state.currentClick == "cart" ? "white":"gray"} />
				</TouchableOpacity>

				<TouchableOpacity onPress={()=>this.clicked("account")} style={styles.one}>
					<Material style={[styles.center, this.state.currentClick == "account" ? styles.change:styles.notChange]} name="account" size={40} color={this.state.currentClick == "account" ? "white":"gray"}  />
				</TouchableOpacity>

				<TouchableOpacity onPress={()=>this.clicked("setting")} style={styles.one}>
					<IonIcons  style={[styles.center, this.state.currentClick == "setting" ? styles.change:styles.notChange]} name="md-settings" size={40} color={this.state.currentClick == "setting" ? "white":"gray"}  />
				</TouchableOpacity>

			</View>
		)	
	}
}

const styles = StyleSheet.create({
	container: {
		position:"absolute" ,
		bottom: 0,
		display:"flex"	,
		flexDirection: "row",
		alignItems: "center",
		textAlign: "center",
		// margin: 5,
		marginTop:35
	},
	one:{
		// backgroundColor : "red",
		textAlign: "center",
		flex : 1
	},
	notChange:{
		backgroundColor : "white"
	},
	change:{
		backgroundColor : "red"
	},
	center: {
		margin: 0,
		textAlign: "center"
	}

 });