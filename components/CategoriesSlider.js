import React, { Component } from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity, ScrollView,PanResponder, SafeAreaView} from "react-native"
export default class CategoriesSlider extends Component {
	constructor(){
		super()
			this.panResponder;
			this.scroll= 0
			this.count = 0
			this.touched = false
			this.tempClicked = ""
			this.clickedCategoryIndex = 0

			this.state = {
				categoryToFilter : ""
			}
	}

	componentWillMount() {
		// console.warn("n",this.props.data)
		if (this.props.data.length != 0){
			this.setState({categoryToFilter : this.props.data[0].title}) 
		}

		this._panResponder = PanResponder.create({

			onStartShouldSetPanResponder:(evt, gestureState) => true,
			
			onMoveShouldSetPanResponder: (evt, gestureState) => true,

			onPanResponderRelease:(evt,gestureState)=>{
			},
			onPanResponderEnd: (evt,gestureState) => {
				// console.warn("touched",this.touched,"move",gestureState.dx)
				if (this.touched && gestureState.dx <= 4 && gestureState.dx >= -4){
					this.props.moveToIndex(this.clickedCategoryIndex)
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
		backgroundColor:"white",
	},
	items:{
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
	}

 });
