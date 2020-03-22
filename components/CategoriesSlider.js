import React, { Component } from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity, ScrollView,PanResponder, SafeAreaView} from "react-native"
export default class CategoriesSlider extends Component {
	constructor(){
		super()
		this.panResponder;
		scroll= 0
		this.count = 0
		this.touched = false
		this.clickedCategory = ""
	}
	state = {
		locationX: 0, 
      moveScroll : 0,
		locationY: 0 ,
		categoryToFilter : "",
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
	componentWillMount() {
		// console.warn(touched)
		this._panResponder = PanResponder.create({

			onStartShouldSetPanResponder:(evt, gestureState) => true,
			
			onMoveShouldSetPanResponder: (evt, gestureState) => true,

			onPanResponderRelease:(evt,gestureState)=>{
				// console.warn(gestureState.dx)
			},
			onPanResponderEnd: (evt,gestureState) => {
				// this.
				console.warn("touched",this.touched,"move",gestureState.dx)
				if (this.touched && gestureState.dx == 0){
					this.setState({categoryToFilter : this.clickedCategory})
					// this.scroll.scrollToIndex({viewPosition:0.5, index: index});
				}
				// console.warn("end",)
				this.touched = false
			},
			onPanResponderMove : ()=>{

			}
		 });
	 }
	categoryFilter(elem,index){
		console.warn(elem,index)
		this.touched = true
		this.clickedCategory = elem
		// this.setState({categoryToFilter : elem})
		// this.componentWillMount(true)
		// setTimeout(()=>{
		// 	this.scroll.scrollToIndex({viewPosition:0.5, index: index});
		// },500)
	}
	render() {
		console.warn("filter",this.state.categoryToFilter)
		return (
			<View  style={styles.container}>

				<SafeAreaView style={styles.container}>
					<FlatList
						{...this._panResponder.panHandlers}
						horizontal
						ref={(ref) => this.scroll = ref}
						showsHorizontalScrollIndicator={false}
						data={this.state.data}
						renderItem={({item})=>{
							this.count += 1
							if(this.count > this.state.data.length){
								this.count = 1
							}
							let count = this.count

							return(
								<TouchableOpacity  onPressOut={()=>this.categoryFilter(item.title,count-1)} style={[styles.items,this.state.categoryToFilter == item.title ? styles.border:""]} >
									<Text   style={styles.itemsText} >{item.title}</Text>
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
