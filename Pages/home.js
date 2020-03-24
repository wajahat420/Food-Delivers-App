import React, { Component } from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import Caterories from "../components/CategoriesSlider"
import Shops from "../components/shops"
import {View,StyleSheet} from "react-native"

export default class Home extends Component {
	state = {
		data: [
			{
				id:"12",
				title: "All Categories"
			},
			{
				id:"123",
				title: "Fast Food"
			},
			{
				id:"222",
				title: "Dairy Products"
			},
			{
				id:"3232",
				title: "General Items"
			},
			{
				id:"28282",
				title: "Hotel Food"
			},			
			{
				id:"8484",
				title: "Medicines"
			}
		]
	}
	render() {
		return (
		<View style={styles.container}>
			<Header/>
			<Caterories data = {this.state.data}/>
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
