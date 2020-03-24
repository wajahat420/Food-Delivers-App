import React from 'react'
import { Text,View ,StyleSheet} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function insideShopHeader(props) {
	return (
		<View style={styles.headingBG}>
			<TouchableOpacity onPress={props.backPress} activeOpacity={0.6} style={[styles.both,styles.arrow]}>
				<AntDesign  name="arrowleft" size={30} color="white"/>
			</TouchableOpacity>

			<Text style={styles.heading}>{props.shopName}</Text>

			<TouchableOpacity onPress={props.searchPress} activeOpacity={0.6} style={[styles.both,styles.search]}>
				<AntDesign  name="search1" size={25} color="white"/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	
  headingBG: {
		display : "flex",
		flexDirection: "row",
		backgroundColor : "red",
		paddingTop : 38
  },
  both:{
	flex:1
  },
  arrow: {
	paddingTop:5,
	paddingLeft:12,
  },
  search : {
	textAlign : "left",
	paddingRight:12,
	paddingTop : 7,

  },
  heading : {
	//   backgroundColor : "gray",
	  flex : 1,
	  padding : 6,
	  fontSize: 25,
	  textAlign: "center",
	  color: "white"
  }
 });

