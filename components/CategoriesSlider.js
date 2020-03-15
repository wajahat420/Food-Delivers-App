import React, { Component } from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity, ScrollView, TouchableHighlight, TouchableHighlightComponent, TouchableNativeFeedbackBase} from "react-native"
export default class CategoriesSlider extends Component {
	state = {
		categoryToFilter : "",
		data : [
			"All Categories",
			"Fast Food",
			"Dairy Products",
			"General Items",
			"Hotel Food",
			"Medicines"
		]
	}
	categoryFilter(elem){
		this.setState({categoryToFilter : elem})
	}
	render() {
		return (
			<View style={styles.container}>
				{/* <Text>f</Text> */}
				<ScrollView
					// scrollsToTop={true}
					// onTouchEnd={(contentWidth,contentHeight)=>console.warn(contentWidth)}
					// onMagicTap={()=>console.warn("magic")}
					onScrollAnimationEnd={()=>console.warn(this)}
					onContentSizeChange={
						(contentWidth, contentHeight)=>{
							// console.warn(contentWidth+"  "+contentHeight)
							this.setState({})
						}
					}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					{this.state.data.map(elem => {
						return(
							<TouchableOpacity onPress={()=>this.categoryFilter(elem)} style={[styles.items,this.state.categoryToFilter == elem ? styles.border:""]}>
								<Text style={styles.itemsText}>{elem}</Text>
							</TouchableOpacity>
						)
					})}
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor:"rgba(104, 102, 102, 0.253)",
	},
	items:{
		backgroundColor:"white",
		borderRadius : 25,
		margin: 9,
		padding: 3,
		paddingHorizontal: 11,
	},
	itemsText:{
		fontSize: 15,
		textAlign: "center",
	},
	border: {
		borderWidth:1.6,
		borderColor: "red",
	},
	notChange:{
		backgroundColor : "white"
	},
	change:{
		backgroundColor : "red"
	}

 });
