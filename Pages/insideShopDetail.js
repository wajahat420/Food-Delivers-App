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
		// console.warn("constructor")
		this.dataAndCategories = []
		this.navigation = navigation
		this.scroll = 0
		this.itemCategories = []
		this.data = []
		this.shopClicked =	{}

		this.state = {
			display : false,
			loading : false,

			shopsItems :	
			[
				{
					id: "123",
					items : 
						{
							"Shaving Erasers" : [
								{name:"Gillete",piece:30,packet:180},
								{name:"Gillete",piece:60,packet:350},
								{name:"Mach 3",piece:50,packet:300}
							],
							"Chips" : [
								{name:"French Cheese Lays",piece:30},
								{name:"Masala Lays",piece:30},
								{name:"French Cheese Lays",piece:50},
								{name:"Masala Lays",piece:50}
							],
							"Juices and Cold drinks" : [
								{name:"slice",piece:20,packet:300},
								{name:"pakola",piece:35,packet:350}
							],
							"Grocery" : [
								{name: "sugar","1 kg":"80"},
								{name:"aata","1kg":60,"5 kg":500}
							],
							"Tofee" : [
								{name:"Ding Dong",piece:2,packet:5000},
								{name:"Fresh up",piece:2},
								{name:"Fanta",piece:1},
								{name:"Eclairs",piece:2}
							],
						}
				},
				{
					id: "234",
					items : 
						{
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
					id:"789",
					items : 
						{
							"Milk and Yougart" : [
								{name:"milk","1 kg" : 105},
								{name:"yougart","1kg":90}
							],
							"Others" : [
								{name:"small papay","1 kg":60},
								{name:"big papay","1 kg":80},
								{name:"baqar khani",packet:50},
								{name:"egg",piece:10,dozen:110}
							]
						},
					
				},
				{
					id : "198",
					items: 
						{
							"Biryani and Pulao" : [
								{name:"Chicken Biryani",plate:70},
								{name:"Chicken Pulao",plate:70},
								{name:"Beef Biryani",plate:70},
								{name:"Beef Pulao",plate:70},
								{name:"Saadi Biryani",plate:50},
								{name:"Saadi Pulao",plate:50}

							],
							"Daal and Salan": [
								{name:"Daal Maash",plate:80},
								{name:"Daal Maash Fry",plate:100},
								{name:"Daal Chana",plate:80},
								{name:"Daal Chana Fry",plate:100},
								{name:"Chicken Qorma",plate:120}
							],
							"Roti and others" : [
								{name:"Naan",piece: 10},
								{name:"Chapati",piece:9},
								{name:"Shermaal",piece:30},
								{name:"Taftan",piece:30}
							]
						}
					
				}
			]	
		}
		this.categories = []
	}
	sendToCart(shopName,item,pressed) {
		console.warn(shopName,item,pressed)
	}

	renderShopData(item){
				
			this.shopClicked = item
			this.shopClicked["name"] = this.props.shopClicked.name
			
			this.categories = Object.getOwnPropertyNames(item.items)

			this.categories.map((elem,index)=>{
				this.data.push({id:index,title:elem}) 
			})
			// console.warn("shopCLicked", item)
	
			for(i=0;i<this.data.length;i++){
				this.dataAndCategories.push(this.data[i])
				this.dataAndCategories.push(this.data[i])
			}
	}
	moveToIndex(index){
		const catchIndexData = this.dataAndCategories[index*2]
		// console.warn("data",index,catchIndexData,catchIndexData.pieceAndPacket)
		
		let heading = 0
		let smallDiv = 0
		let bigDiv = 0

		let headingSize = 54
		let smallDivSize = 57
		let bigDivSize = 83

		for(i=0;i<index*2;i+=2){
			const data = this.dataAndCategories[i]
			// console.warn("data piece", data.piece,data.pieceAndPacket)
			smallDiv +=  data.piece
			bigDiv +=  data.pieceAndPacket
			heading += 1
		}
		// console.warn(smallDiv,bigDiv,heading)
		this.scroll.scrollToOffset({animated: true,offset:heading * headingSize + smallDiv * smallDivSize + bigDiv * bigDivSize })

	}
	render() { 
		
		// this.setState({})
		
		this.state.shopsItems.forEach(item=>{
			if(item.id === this.props.shopClicked.id && item.id !== this.shopClicked.id){
				this.renderShopData(item)
			}

		})

		return (
			<View>
				<InsideShopHeader 
					searchPress={()=>this.setState({display : !this.state.display})} 
					backPress={()=>	this.navigation.navigate('home')} 
					shopName={this.shopClicked.name}/>
				<CategorySlider 
					data={this.data}
					moveToIndex={(index)=>this.moveToIndex(index)}
				/>
				<Input display={this.state.display ? "input":"display"} placeholder="Search items in this shop"/>
				<FlatList style={styles.ItemsStyling}
					data={this.dataAndCategories}
					keyExtractor={item => item.key}
					ref={(ref) => this.scroll = ref}

					renderItem = {elem=>{
						// console.warn("clicked",this.shopClicked.items[elem.item.title])
						const categoryItems = this.shopClicked.items[elem.item.title]
						let counter1 = 0
						let counter2 = 0
						this.dataAndCategories[elem.index]["pieceAndPacket"] = 0
						this.dataAndCategories[elem.index]["piece"] = 0
						// console.warn("categoryItems",elem,this.dataAndCategories.length)
						// console.warn("counter",elem.index)
						if (elem.index % 2 ==0) {
							return <Text style={styles.category}>{elem.item.title}</Text>
						}
						return(
							categoryItems.map((item)=>{
								let pieceORDesc = Object.getOwnPropertyNames(item)[1]
								let packetORDesc = Object.getOwnPropertyNames(item)[2]

								if(item[packetORDesc] !== undefined){
									// counter1 += 1
									this.dataAndCategories[elem.index]["pieceAndPacket"] = counter1 += 1
								}else{
									this.dataAndCategories[elem.index]["piece"] = counter2 += 1
								}
								return(
									<InsideShopDetailComponent 
										perPiecePress={()=>this.sendToCart(this.shopClicked.name,item,"piece")}
										packetPress = {()=> this.sendToCart(this.shopClicked.name,item,"packet")}
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
	},
	category : {
		fontSize : 25,
		fontWeight : "100",
		paddingVertical:  5,
		paddingBottom : 16
	}
})


const mapStateTOProps = (state) =>{
	return{
		shopClicked : state.shopClicked
	}
}

const mapDispatchTOProps = (dispatch) =>{
	return{

	}
}

export default connect(mapStateTOProps,mapDispatchTOProps)(InsideShopDetail);


