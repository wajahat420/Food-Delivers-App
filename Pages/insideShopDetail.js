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

		this.dataAndCategories = []
		this.navigation = navigation
		this.scroll = 0
		this.data = []
		this.shopClicked =	{}

		this.state = {

			updateQty : {"28273363.99":{piece:0,packet:0}},
			display : false,
			loading : false,
			shopsItems : []
		}
		// console.warn("update up",this.state.shopsItems)


		this.categories = []
	}
	componentDidMount(){
		this.setState({})
	}
	sendToCart(shopName,item,pressed) {
		// console.warn(shopName,item,pressed)

		let copy = {...this.state.updateQty}
		let updateQty = this.state.updateQty
		let pieceQty;
		let packetQty;
		let piece = Object.getOwnPropertyNames(item)[2]
		let packet = Object.getOwnPropertyNames(item)[3]

		if (updateQty[item.id] == undefined){
			if (pressed == "piece"){
				copy[item.id] = {piece:1,packet:0}
				pieceQty = 1
				packetQty = 0
			}else{
				copy[item.id] = {piece:0,packet:1}
				pieceQty = 0
				packetQty = 1
			}
		}else{
			if (pressed == "piece"){
				copy[item.id]["piece"] += 1
			}else{
				copy[item.id]["packet"] += 1
			}
			pieceQty = copy[item.id]["piece"]
			packetQty = copy[item.id]["packet"] 
		}
		this.setState({updateQty:copy},()=>{
			// console.warn("updateQty",this.state.updateQty)
			this.props.changeQty(this.state.updateQty)
		})

		let BuyItem = {
			shop : shopName,
			item : item["name"],
			piecePrice : item[piece],
			pieceQty,
			pieceName:piece,
			packetPrice : item[packet],
			packetQty,
			packetName : packet
		}
		// console.warn("packet",BuyItem)
		let cart = {...this.props.getCart}
		cart[item.id] = BuyItem

		this.props.cart(cart)
		
	}

	renderShopData(item){
			console.warn("item",item)
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
	moveToIndex(index,heading=0, smallDiv=0, bigDiv=0){
		console.warn("index",heading,smallDiv,bigDiv)
		
		let headingSize = 54
		let smallDivSize = 57
		let bigDivSize = 83

		for(i=0;i<index*2;i+=2){
			const data = this.dataAndCategories[i]
			smallDiv +=  data.piece
			bigDiv +=  data.pieceAndPacket
			heading += 1
		}
		// console.warn( headingSize,  smallDivSize, bigDivSize,57+54+83)
		console.warn(smallDiv,bigDiv)
		this.scroll.scrollToOffset({animated: true,offset : heading * headingSize + smallDiv * smallDivSize + bigDiv * bigDivSize })
		// this.scroll.scrollToOffset({animated: true,offset : headingSize +  })

	}
	onChangeText(text){
		// console.warn("data",this.dataAndCategories)
		// console.warn("shopsItems",this.props.shopsItems)
		// console.warn("categories",this.categories)
		let found = false
		for(i=0;i<this.categories.length;i++){
			let smallDiv = 0
			let bigDiv = 0
			const category = this.categories[i]

			this.shopClicked.items[category].forEach((item,index)=>{
				const objkeys = Object.getOwnPropertyNames(item)
				if(objkeys[3] == undefined){
					smallDiv += 1
				}else{
					bigDiv += 1
				}

				itemName = item.name.split(" ")
				itemName.forEach(elem=>{
					if(elem.toLowerCase().includes(text.toLowerCase()) && found == false){
						found = true
						this.moveToIndex(i,-1,smallDiv,bigDiv)
					}
				})
			})
		}
		// console.warn("text",text)
	}
	render() { 
		// in dataAndCategories each category is repeated two times in first category render and in second its items.


		this.props.shopsItems.forEach(item=>{
			if(item.id === this.props.shopClicked.id && item.id !== this.shopClicked.id){
				this.shopClicked = item
				this.renderShopData(item)
			}

		})

		return (
			<View>
				<InsideShopHeader 
					searchPress={()=>this.setState({display : !this.state.display})} 
					backPress={()=>	this.navigation.navigate('home')} 
					name={this.shopClicked.name}/>
				<CategorySlider 
					data={this.data}
					moveToIndex={(index)=>this.moveToIndex(index)}
				/>
				<Input display={this.state.display ? "input":"display"} 
					placeholder="Search items in this shop"
					onChangeText={(text)=>this.onChangeText(text)}

				/>
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

						if (elem.index % 2 ==0) {
							return <Text style={styles.category}>{elem.item.title}</Text>
						}
						return(
							categoryItems.map((item)=>{
								let pieceORDesc = Object.getOwnPropertyNames(item)[2]
								let packetORDesc = Object.getOwnPropertyNames(item)[3]

								if(item[packetORDesc] !== undefined){
									this.dataAndCategories[elem.index]["pieceAndPacket"] = counter1 += 1
								}else{
									this.dataAndCategories[elem.index]["piece"] = counter2 += 1
								}

								let updateQty = this.props.updateQty
								if (updateQty[item.id] != undefined){
									piece = updateQty[item.id]["piece"]
									packet = updateQty[item.id]["packet"]
								}else{
									piece = 0
									packet = 0
								}
						
								return(
									<InsideShopDetailComponent 
										id={item.id}
										perPiecePress={()=>this.sendToCart(this.shopClicked.name,item,"piece")}
										packetPress = {()=> this.sendToCart(this.shopClicked.name,item,"packet")}
										item={item.name}
										piece={[pieceORDesc,item[pieceORDesc]]}
										packet={[packetORDesc,item[packetORDesc]]}
										pieceQty={piece}
										packetQty={packet}
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
		shopClicked : state.shopClicked,
		getCart : state.cart,
		updateQty : state.updateQty,
		shopsItems : state.shopItems
	}
}

const mapDispatchTOProps = (dispatch) =>{
	return{
		cart : (cart)=>{
			dispatch({
				type :"cart",
				updateCart : cart
			})
		},
		changeQty : (update)=>{
			dispatch({
				type : "update",
				update
			})
		}
	}
}

export default connect(mapStateTOProps,mapDispatchTOProps)(InsideShopDetail);


