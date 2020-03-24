import React, { Component } from 'react'
import {Text,Button,View, StyleSheet,FlatList} from "react-native"
import InsideShopDetailComponent from "../components/insideShopComponent"
import InsideShopHeader from "../components/insideShopHeader"
import CategorySlider from "../components/CategoriesSlider"
import Input from "../components/textInput"

import {connect} from "react-redux";


class InsideShopDetail extends Component {
	constructor({navigation}){
		super()
		this.navigation = navigation
		this.itemCategories = []
		this.data = []
		this.state = {
			display : false,
			loading : false,
			shopClicked :			
			{
				id: Math.ceil(Math.random() * Math.random() * 10000),
				name : "SSAZZ",
				items : 
					{
						"Chips" : [
							{name:"French Cheese Lays",piece:30},
							{name:"Masala Lays",piece:30},
							{name:"French Cheese Lays",piece:50},
							{name:"Masala Lays",piece:50}
						],
						"Shaving Erasers" : [
							{name:"Gillete",piece:30,packet:180},
							{name:"Gillete",piece:60,packet:350},
							{name:"Mach 3",piece:50,packet:300}
						],
						"Juices and Cold drinks" : [
							{name:"slice",piece:20,packet:300},
							{name:"pakola",piece:35,packet:350}
						],
						"Grocery" : [
							{name: "sugar","1 kg":"80"},
							{name:"aata","1kg":"60"}
						]
					}
			},
			shopsItems :	
			[
			{
				id: Math.ceil(Math.random() * Math.random() * 10000),
				name : "SSAZZ",
				items : 
					{
						"Chips" : [
							{name:"French Cheese Lays",piece:30},
							{name:"Masala Lays",piece:30},
							{name:"French Cheese Lays",piece:50},
							{name:"Masala Lays",piece:50}
						],
						"Shaving Erasers" : [
							{name:"Gillete",piece:30,packet:180},
							{name:"Gillete",piece:60,packet:350},
							{name:"Mach 3",piece:50,packet:300}
						],
						"Juices and Cold drinks" : [
							{name:"slice",piece:20,packet:300},
							{name:"pakola",piece:35,packet:350}
						],
						"Grocery" : [
							{name: "sugar","1 kg":"80"},
							{name:"aata","1kg":"60"}
						]
					}
			},
			{
				id: Math.ceil(Math.random() * Math.random() * 10000),
				name : "SSAZZ",
				items : 
					{
						"Chips" : [
							{name:"French Cheese Lays",piece:30},
							{name:"Masala Lays",piece:30},
							{name:"French Cheese Lays",piece:50},
							{name:"Masala Lays",piece:50}
						],
						"Shaving Erasers" : [
							{name:"Gillete",piece:30,packet:180},
							{name:"Gillete",piece:60,packet:350},
							{name:"Mach 3",piece:50,packet:300}
						],
						"Juices and Cold drinks" : [
							{name:"slice",piece:20,packet:300},
							{name:"pakola",piece:35,packet:350}
						],
						"Grocery" : [
							{name: "sugar","1 kg":"80"},
							{name:"aata","1kg":"60"}
						]
					}
			}
			]		
		}
		this.categories = Object.getOwnPropertyNames(this.state.shopClicked.items)
	}
	sendToCart(shopName,item,pressed) {
		console.warn(shopName,item,pressed)
	}
	componentWillMount(){
		console.warn("signin",this.props.signin)
		this.categories.map((elem,index)=>{
			this.data.push({id:index,title:elem}) 
		})
	}
	render() { 
		// console.warn("data",this.data.length,this.data)
		// console.warn(",,,",this.categories)
		return (
			<View>
				<InsideShopHeader 
					searchPress={()=>this.setState({display : !this.state.display})} 
					backPress={()=>	this.navigation.navigate('home')} 
					shopName={this.state.shopClicked.name}/>
				<CategorySlider data={this.data}/>
				<Input display={this.state.display ? "input":"display"} placeholder="Search items in this shop"/>
				<FlatList style={styles.ItemsStyling}
					data={this.data}
					keyExtractor={item => item.key}
					renderItem = {elem=>{
						const categoryItems = this.state.shopClicked.items[elem.item.title]
						
						return(
							categoryItems.map((item)=>{
								let pieceORDesc = Object.getOwnPropertyNames(item)[1]
								let packetORDesc = Object.getOwnPropertyNames(item)[2]
								return(
									<InsideShopDetailComponent 
										perPiecePress={()=>this.sendToCart(this.state.shopClicked.name,item,"piece")}
										packetPress = {()=> this.sendToCart(this.state.shopClicked.name,item,"packet")}
										item={item.name}
										piece={[pieceORDesc,item[pieceORDesc]]}
										packet={[packetORDesc,item[packetORDesc]]}
									/>
								)
							})					
						)
					}}
				>
				</FlatList>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	ItemsStyling : {
		paddingHorizontal : 8,
		marginBottom: 140
		// marginBottom : 20
		// marginVertical : 9
		// marginHorizontal : 8
	}
})


const mapStateTOProps = (state) =>{
	return{
		signin : state.signin
	}
}

const mapDispatchTOProps = (dispatch) =>{
	return{

	}
}

export default connect(mapStateTOProps,mapDispatchTOProps)(InsideShopDetail);


