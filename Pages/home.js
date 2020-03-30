import React, { Component } from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import Caterories from "../components/CategoriesSlider"
import AllShopsUnderCategory from "../components/categoryShopsSlider/allShopsUnderCategory"
import Input from "../components/textInput"
import {Text,View,StyleSheet} from "react-native"

import {connect} from "react-redux"

class Home extends Component {
	constructor({navigation}){
		super()
		this.navigation = navigation
		this.data =  [],
		this.state = {
			// categories : []
		}
	}

	openShopDetails(item){
		// console.warn("workkkkk",item)
		this.navigation.navigate("insideShopDetails")
		this.props.setShopClicked(item)
	}
	componentDidMount(){
		this.setState({})
	}
	render() {

		return (
		<View style={styles.container}>
			<Header/>
			<Caterories data = {this.data} moveToIndex={()=> "nothing....."}/>
			<Input placeholder="Search Food, General Items etc.."/>
			<AllShopsUnderCategory 
				openShopDetails={(item)=>this.openShopDetails(item)}
				categories = {(data)=> this.data = data}
			/>
			<Footer/>
		</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '	background-color: rgba(185, 185, 185, 0.253)ss',
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