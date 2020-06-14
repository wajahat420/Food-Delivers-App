import React, { Component } from 'react'
// import {View} from "react-native"
import Shops from "./shops"
import { ScrollView,StyleSheet ,PanResponder} from 'react-native'
// import { StyleSheet } from 'react-native'
export default class allShopsUnderCategory extends Component {

	constructor(){
		super()
		this.panResponder;
		this.shopsUnderCategories = {}
		this.state = {
			shopDeatils :
			[
				{
					id : "123",
					img: "../general_store.jpeg",
					name: "Anti",
					location :"Ahsanabad Shops",
					shopType : "general"
				},
				{
					id: "234",
					img: "../boat.jpg",
					name: "SSAZZ",
					location :"Ahsanabad Shops",
					shopType:  "general"
				},
				{
					id:"789",
					img: "../boat.jpg",
					name: "Nagori Milk Shop",
					location :"Ahsanabad Shops",
					shopType: "dairy"
				},
				{
					id:"198",
					img: "../boat.jpg",
					name: "Umair Fazal Hotel",
					location :"Ahsanabad Shops",
					shopType :"hotel"
				}
			]
		}
	}

	componentWillMount() {
		// console.warn("n",this.props.data[0].title)
		// this.setState({categoryToFilter : this.props.data[0].title}) 
		this._panResponder = PanResponder.create({

			onStartShouldSetPanResponder:(evt, gestureState) => true,
			
			onMoveShouldSetPanResponder: (evt, gestureState) => true,

			onPanResponderRelease:(evt,gestureState)=>{
			},
			onPanResponderEnd: (evt,gestureState) => {
				// console.warn("touched inside",this.touched,"move",gestureState,gestureState.y0-gestureState.moveY)
				// if (this.touched && gestureState.dx <= 4 && gestureState.dx >= -4){
				// 	this.props.moveToIndex(this.clickedCategoryIndex)
				// 	this.setState({categoryToFilter : this.tempClicked})
				// 	this.scroll.scrollToIndex({viewPosition:0.5, index: this.clickedCategoryIndex});
				// }
				this.touched = false
			},
			onPanResponderMove : ()=>{

			}
		 });
	 }

	
	render() {

		const data = []
		this.state.shopDeatils.forEach(x=>{

			// if()
			// obj["title"] = x.shopType
			if(this.shopsUnderCategories[x.shopType] == undefined){
				this.shopsUnderCategories[x.shopType] = [x]
				const obj = {id:x.id, title:x.shopType}
				data.push(obj)
			}else{
				this.shopsUnderCategories[x.shopType].push(x)
			}

			// console.warn("allshops",x.shopType,this.shopsUnderCategories[x.shopType])
		})
		const categories = Object.getOwnPropertyNames(this.shopsUnderCategories)
		this.props.categories(data)
		console.warn(categories)
		// console.warn(this.shopsUnderCategories)

		return (
			<ScrollView
			// {...this._panResponder.panHandlers}
				 style={styles.container}
			>
				{
					categories.map(x=>
							<Shops 
								openShopDetails = {(item)=>this.props.openShopDetails(item)}
								category={this.shopsUnderCategories[x]}
								shopType = {x}
							/>
						 )
				}
			</ScrollView>
		)
	}
}

const styles =	StyleSheet.create({
	container : {
		marginBottom : 55
	}
})
