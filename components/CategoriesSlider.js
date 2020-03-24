import React, { Component } from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity, ScrollView,PanResponder, SafeAreaView} from "react-native"
export default class CategoriesSlider extends Component {
	constructor(){
		super()
		this.panResponder;
		scroll= 0
		this.count = 0
		this.touched = false
		this.tempClicked = ""
		this.clickedCategoryIndex = 0
	}
	state = {
		locationX: 0, 
      moveScroll : 0,
		locationY: 0 ,
		categoryToFilter : ""
	}
	componentWillMount() {
		this._panResponder = PanResponder.create({

			onStartShouldSetPanResponder:(evt, gestureState) => true,
			
			onMoveShouldSetPanResponder: (evt, gestureState) => true,

			onPanResponderRelease:(evt,gestureState)=>{
				// console.warn(gestureState.dx)
			},
			onPanResponderEnd: (evt,gestureState) => {
				// console.warn("touched",this.touched,"move",gestureState.dx)
				if (this.touched && gestureState.dx <= 4){
					this.setState({categoryToFilter : this.tempClicked})
					this.scroll.scrollToIndex({viewPosition:0.5, index: this.clickedCategoryIndex});
				}
				this.touched = false
			},
			onPanResponderMove : ()=>{

			}
		 });
	 }
	categoryFilter(elem,index){
		this.touched = true
		this.clickedCategoryIndex = index
		this.tempClicked = elem
	}
	render() {
		return (
			<View  style={styles.container}>

				<SafeAreaView style={styles.container}>
					<FlatList
						{...this._panResponder.panHandlers}
						horizontal
						ref={(ref) => this.scroll = ref}
						showsHorizontalScrollIndicator={false}
						data={this.props.data}
						renderItem={({item})=>{
							this.count += 1
							if(this.count > this.props.data.length){
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
		// borderRadius : 25,
		// margin: 9,
		padding: 13,
		paddingHorizontal: 11,
	},
	itemsText:{
		fontSize: 15,
		textAlign: "center",
	},
	border: {
		borderBottomWidth:2,
		borderColor: "red",
	},
	notChange:{
		backgroundColor : "white"
	},
	change:{
		backgroundColor : "red"
	}

 });
