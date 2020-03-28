import React, { Component } from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import Caterories from "../components/CategoriesSlider"
import Shops from "../components/shops"
import Input from "../components/textInput"
import {View,StyleSheet} from "react-native"

import {connect} from "react-redux"

class Home extends Component {
	constructor({navigation}){
		super()
		this.navigation = navigation
	}
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

	openShopDetails(item){
		this.navigation.navigate("insideShopDetails")
		this.props.setShopClicked(item)
	}
	render() {
		return (
		<View style={styles.container}>
			<Header/>
			<Caterories data = {this.state.data}/>
			<Input placeholder="Search Food, General Items etc.."/>
			<Shops openShopDetails={(item)=>this.openShopDetails(item)}/>
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

 const mapStateTOProps = (state) =>{
	return{
		signin : state.signin
	}
}

const mapDispatchTOProps = (dispatch) =>{
	return{
		setShopClicked :(shopClicked) => {
			dispatch({
				type : "shopClicked",
				shopClicked
			})
		}
	}
}

export default connect(mapStateTOProps,mapDispatchTOProps)(Home)