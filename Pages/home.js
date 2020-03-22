import React, { Component } from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import Caterories from "../components/CategoriesSlider"
import Shops from "../components/shops"
import {Text,Button,View,StyleSheet} from "react-native"

export default class Home extends Component {
	render() {
		return (
		<View style={styles.container}>
			<Header/>
			<Caterories/>
			<Shops/>
			<Footer/>
		</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '	background-color: rgba(185, 185, 185, 0.253)ss',
	  // margin: 5,
	  // marginTop:35
	  // alignItems: 'center',
	  // justifyContent: 'center',
	},
 });
