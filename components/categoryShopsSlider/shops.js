import React from 'react'
import ShopFront from "./shopFrontDiv"
import {Text, View,SafeAreaView,FlatList, StyleSheet, TouchableOpacity} from "react-native"


export default function Shops(props) {
	console.warn("shops.js")

	return (
		<View style={styles.container}>
			<Text style={{paddingBottom:7,fontSize:17,textTransform:"capitalize"}}>{props.shopType}</Text>
			<SafeAreaView>
				<FlatList 
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={item => item.id}
					data={props.category}
					renderItem={({item})=>{

						return(
							<TouchableOpacity activeOpacity={0.8} onPress={()=>props.openShopDetails(item)}>
								<ShopFront
									imgURL={item.img}
									name={item.name}
									location={item.location}
								/>
							</TouchableOpacity>
						)

					}}
				/>

			</SafeAreaView>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		padding :6,
		margin:12,
		marginBottom : 0,
		backgroundColor :"white",
		borderRadius: 3,
	},
 });
