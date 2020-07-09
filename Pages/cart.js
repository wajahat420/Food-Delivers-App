import React, { Component } from 'react'
import CartDetails from "../components/cartDetails"

import { Text, View,StyleSheet} from 'react-native'
import {connect} from "react-redux"
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

 class cart extends Component {
     constructor(){
         super()
         this.total = 0
         this.state = {
             total : 0
         }
     }
    update(operator,itemID,pieceORpacket){
        // console.warn("op",operator,itemID,pieceORpacket)
        let cart = this.props.cart
        let shopClicked = this.props.shopClicked
        let update = {...this.props.update}
        let updateQty = update[shopClicked["id"]]
        let cartQuantity = this.props.cartQuantity
        // console.warn("qty",shopClicked,update)
        
        let keys =  Object.keys(update)
        for(i=0;i<keys.length;i++){
            var shopID = keys[i]
            console.warn("shopID",shopID)
            if(update[shopID].hasOwnProperty(itemID)){  
                updateQty = update[shopID]
                // console.warn("founddddd")
                break
            }
        }
        // console.warn("updateQty",updateQty,"itemID=",itemID)

        if(pieceORpacket == "piece"){
            if(operator == "dec"){
                cart[itemID]["pieceQty"] -= 1
                updateQty[itemID]["piece"] -= 1
                cartQuantity -= 1
            }else{
                cart[itemID]["pieceQty"] += 1
                updateQty[itemID]["piece"] += 1
                cartQuantity += 1
            }
        }else{
            if(operator == "dec"){
                cart[itemID]["packetQty"] -= 1
                updateQty[itemID]["packet"] -= 1
                cartQuantity -= 1
            }else{
                cart[itemID]["packetQty"] += 1
                updateQty[itemID]["packet"] += 1
                cartQuantity += 1
            }
        }
        // console.warn("itemIDd",cart[itemID]["pieceQty"],cart[itemID]["packetQty"])
        if(cart[itemID]["pieceQty"] == 0 && cart[itemID]["packetQty"] == 0){
            delete updateQty[itemID]
            delete cart[itemID]
        }
        if(Object.keys(cart).length === 0){
            this.props.updateTotal(0)
            cartQuantity = 0
        }
        update[shopID] = updateQty

        this.props.updateCartQuantity(cartQuantity)
        this.props.updateCart(cart)
        this.props.updateQty(update)
        this.setState({})
    }
    componentDidMount(){
        this.setState({})
    }

    render() {
        return (
            <View style={{marginTop :30}}>

                <View style={this.props.total == 0 ? {display:"none"}:{display:"flex"}}>
                    <CartDetails
                        update={(operator,id,pieceORpacket,total)=>this.update(operator,id,pieceORpacket,total)}
                    />
                    <View style={{flexDirection : "row",marginHorizontal : 12,marginTop:15}}>
                        <Text style={{fontSize : 22,fontWeight:"700"}}>Total</Text>
                        <Text style={{position:"absolute",right:0,fontSize : 18}}>Rs {this.props.total}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={styles.button}>Confirm</Text>
                    </TouchableOpacity>
                </View>

                <View style={[{marginTop:50},this.props.total == 0 ? {display:"flex"}:{display:"none"}]}>
                    <Text style={{fontSize:20,textAlign:"center",color:"red"}}>Nothing in Cart.</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button : {
        textAlign : "center",
        fontSize : 20,
        padding : 4,
        backgroundColor  : "blue",
        color : "white",
        width  : 280,
        alignSelf : "center",
        marginTop : 40,
        borderRadius : 4

    }
})

const mapStateTOProps = (state) =>{
    return{
        cart : state.cart,
        update : state.updateQty,
        total : state.total,
        cartQuantity : state.cartQuantity,
        shopClicked : state.shopClicked
    }
}
const mapDispatchTOProps = (dispatch) => {
    return{
        updateCart : (updateCart)=>{
            dispatch({
                type : "cart",
                updateCart 
            })

        },
        updateQty : (updateQty)=>{
            dispatch({
                type : "update",
                update : updateQty
            })
        },
        updateTotal : (total)=>{
            dispatch({
                type : "total",
                updateTotal : total
            })

        },
        updateCartQuantity : (quantity)=>{
            dispatch({
                type : "quantity",
                updateQuantity : quantity
            })

        }
    }
}
export default connect(mapStateTOProps,mapDispatchTOProps)(cart)

