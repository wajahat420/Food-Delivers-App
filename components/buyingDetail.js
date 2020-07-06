import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function buyingDetail(props) {
    return (
        <View style={styles.headingBG}>
                <View style={{flex:1}}>
                    <View style={{backgroundColor:"blue",borderRadius:10,position:"absolute",width:20,top:12,left:22}}>
                      <Text style={{textAlign:"center",color:"white"}}>9</Text>
                    </View>
                    <AntDesign    name="shoppingcart" size={55} color={ "white"} />
                </View>
                <TouchableOpacity onPress={()=>props.redirectToCart.navigate("cart")} style={{flex:1}}>
                  <Text style={[styles.viewCart,styles.both]}>View Cart</Text>
                </TouchableOpacity>
    <Text style={[styles.Total,styles.both,{flex:1}]}>Rs. {props.total}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headingBG: {
    // flex:1,
		position:"absolute" ,
		bottom: 0,
		display : "flex",
		flexDirection: "row",
    backgroundColor : "red",
    alignItems:"center",

		// paddingTop : 20
  },
  both:{
    // alignItems:"center",
    color:"white",
    fontSize:17
  },
  viewCart:{
    paddingTop:17,
    textAlign:"center"
  },
  Total:{
    textAlign:"right",
    paddingRight:12
  }
})
