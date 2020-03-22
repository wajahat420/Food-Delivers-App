import React, { Component } from 'react'
import {Text,Button,View, StyleSheet} from "react-native"
import InsideShopDetailComponent from "../components/insideShopComponent"
import InsideSHopHeader from "../components/insideShopHeader"
import { ScrollView } from 'react-native-gesture-handler'
export default class InsideShopDetail extends Component {
	state = {
		shopItems : 
			[
				{
					name : "Anti",
					items : 
						{
							"Chips" : [
								{"name":"French Cheese Lays","piece":30},
								{"name":"Masala Lays","piece":30},
								{"name":"French Cheese Lays","piece":50},
								{"name":"Masala Lays","piece":50}
							],
							"Shaving Erasers" : [
								{"name":"Gillete","piece":30,"packet":180},
								{"name":"Gillete","piece":60,"packet":350},
								{"name":"Mach 3","piece":50,"packet":300}
							],
							"Juices and Cold drinks" : [
								{"name":"slice","piece":20,"packet":300},
								{"name":"pakola","piece":35,"packet":350}
							]
						}	
				},
				{
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
							]
						}
				}
			]
		
	}

	filterShops(shop){
		// console.warn("work",shop.name)
		return shop.name ==  "SSAZZ"
	}
	sendToCart(shopName,item,pressed) {
		console.warn(shopName,item,pressed)
	}
	render() {
		return (
			<View>
				<InsideSHopHeader/>
				<ScrollView style={styles.ItemsStyling}>

					{this.state.shopItems.filter((shop)=>this.filterShops(shop)).map( shop => {
						// console.warn("ite",shop)
						let itemCategories = Object.getOwnPropertyNames(shop.items)
						// console.warn("categories",itemCategories)
						return(
							itemCategories.map(category => {
								return(
									shop.items[category].map(item=>{
										let pieceORDesc = Object.getOwnPropertyNames(item)[1]
										let packetORDesc = Object.getOwnPropertyNames(item)[2]
										console.warn("piece packet",item[pieceORDesc])
										return (
											<InsideShopDetailComponent 
												perPiecePress={()=>this.sendToCart(shop.name,item,"piece")}
												packetPress = {()=> this.sendToCart(shop.name,item,"packet")}
												item={item.name}
												piece={[pieceORDesc,item[pieceORDesc]]}
												packet={[packetORDesc,item[packetORDesc]]}
											/>
										)
									})
								)
								// let name =  Object.getOwnPropertyNames(item)[0]
								// let price = item[name]
								// // console.warn("elemmm",name,price)
								// return (
								// 	<InsideShopDetailComponent
								// 		perPiecePress={()=>this.sendToCart(shop.name,name,price)}
								// 		packetPress = {()=> this.sendToCart(shop.name,name,price)}
								// 		item={name}
								// 		price={price}
								// 	/>
								// )
							})
						)
					})}
				</ScrollView>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	ItemsStyling : {
		paddingHorizontal : 8,
		// marginBottom : 20
		// marginVertical : 9
		// marginHorizontal : 8
	}
})
