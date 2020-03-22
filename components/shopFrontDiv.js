import React, { Component } from 'react'
import {View,Text,Image} from "react-native"

export default class ShopFrontDiv extends Component {
	render() {
		return (
			<View style={{width:87,marginRight:11}}>
				<Image
					style={{width:90,height:100}}
					// source={require("../general_store2.jpeg")}
					source={{uri:"https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png"}}
				/>
				<Text numberOfLines={1} style={{fontSize:13,color:"red",marginTop:8}}>{this.props.name}</Text>
				<Text numberOfLines={1} style={{fontSize:11,overflow:"hidden",marginTop:2}}>{this.props.location}</Text>
			</View>
		)
	}
}
