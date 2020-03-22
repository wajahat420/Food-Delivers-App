import React, { Component } from 'react'
import ShopFront from "../components/shopFrontDiv"
import {Text, View,SafeAreaView,FlatList, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, TouchableHighlightBase, TouchableNativeFeedback} from "react-native"

export default class Shops extends Component {
	state = {
		shopDeatils :
		[
			{
				img: "../general_store.jpeg",
				name: "Anti",
				location :"Ahsanabad Shops"
			},
			{
				img: "../boat.jpg",
				name: "SSAZZ",
				location :"Ahsanabad Shops"
			},			{
				img: "../boat.jpg",
				name: "Nagori Milk Shop",
				location :"Ahsanabad Shops",
				items :[]
			},
			{
				img: "../boat.jpg",
				name: "Nagori Milk Shop",
				location :"Ahsanabad Shops",
				items :[]
			},
			{
				img: "../boat.jpg",
				name: "Nagori Milk Shop",
				location :"Ahsanabad Shops",
				items :[]
			}
		]
	}
	openShopDetails(item){
		console.warn("item",item)

	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={{paddingBottom:7,fontSize:17}}>General Stores</Text>
				<SafeAreaView>
					<FlatList 
						horizontal
						showsHorizontalScrollIndicator={false}
						data={this.state.shopDeatils}
						renderItem={({item})=>{

							return(
								<TouchableOpacity activeOpacity={0.8} onPress={()=>this.openShopDetails(item)}>
									<ShopFront
										imgURL={item.img}
										name={item.name}
										location={item.location}
									/>
								</TouchableOpacity>
							)

						}}
						keyExtractor={item => item.id}
					/>

				</SafeAreaView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding :6,
		margin:12,
		backgroundColor :"white",
		borderRadius: 3,

	// 	borderWidth: 4,
	// 	borderColor: '#ddd',
	// 	shadowOffset: { width: 20, height: 20 },
	// 	shadowOpacity: 0.8,
	// 	shadowRadius: 1,
	},
 });
