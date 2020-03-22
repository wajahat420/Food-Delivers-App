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
					items: [
						{"Gillete Eraser" : 25},
						{"French Cheese Lays": 30},
						{"Prince": 20},
						{"Cocomo":5},
						{"Masala Lays":50}
					]	
				},
				{
					name : "SSAZZ",
					items : [
						{"123 coil" : 12},
						{"Slice Juice":20},
						{"Senitizer":250},
						{"Safeguard Soap":30},
						{"Yougart Lays":100},
						{"Kanki Rice":60},
						{"Sugar":100},
						{"Gillete Eraser" : 25},
						{"French Cheese Lays": 30},
						{"Prince": 20},
						{"Cocomo":5},
						{"Masala Lays":50}					
					]
				}
			]		
		
	}

	filterShops(shop){
		return shop.name ==  "SSAZZ"
	}
	sendToCart(shopName,ItemName,ItemPrice) {
		console.warn(shopName,ItemName,ItemPrice)
	}
	render() {
		return (
			<View>
				<InsideSHopHeader/>
				<ScrollView style={styles.ItemsStyling}>

					{this.state.shopItems.filter((shop)=>this.filterShops(shop)).map( shop => {
						// console.warn(shop)
						return(
							shop.items.map(item => {
								let name =  Object.getOwnPropertyNames(item)[0]
								let price = item[name]
								// console.warn("elemmm",name,price)
								return (
									<InsideShopDetailComponent
										onPress={()=>this.sendToCart(shop.name,name,price)}
										item={name}
										price={price}
									/>
								)
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
		marginHorizontal : 8
	}
})
