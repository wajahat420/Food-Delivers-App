import React, { Component } from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import Caterories from "../components/CategoriesSlider"
import AllShopsUnderCategory from "../components/categoryShopsSlider/allShopsUnderCategory"
import Input from "../components/textInput"
import {Text,View,StyleSheet,ActivityIndicator} from "react-native"

import {connect} from "react-redux"
import { TouchableOpacity } from 'react-native-gesture-handler'

class Home extends Component {
	constructor({navigation}){
		super()
		this.navigation = navigation
		this.data =  [],
		this.state = {
		}
		this.loading = false
	}

	openShopDetails(item){
		this.loading = true
		this.navigation.navigate("insideShopDetails")
		this.props.setShopClicked(item)
		
	}
	componentDidMount(){
		// this.setState({})
	}
	render() {
		let loader = <Text style={{display:"none"}}></Text>
		if(this.loading){
			loader = <View style={{position:"absolute",top:370,left:160,zIndex:2000}}>
						<ActivityIndicator  size="large" color="#0000ff" />
					</View>
		}
		return (
		<View style={styles.container}>


			<Header 
				name="Food Delivers"
				displaySearch="none"
				displayBack="none"
				/>
			{/* {loader} */}
			<Caterories data = {this.data} moveToIndex={()=> "nothing....."}/>
			<TouchableOpacity onPress={console.warn("working")}>
				<Input placeholder="Search Food, General Items etc.."
					focus={()=>this.navigation.navigate("search")}
					clickDisplay="none"

				/>
			</TouchableOpacity>
			<AllShopsUnderCategory 
				openShopDetails={(item)=>this.openShopDetails(item)}
				categories = {(data)=> this.data = data}
			/> 
			 <Footer navigation={this.navigation}/>
		</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
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