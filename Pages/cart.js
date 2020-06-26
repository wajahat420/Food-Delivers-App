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
    update(operator,id,pieceORpacket,total=0){
        // console.warn("op",operator,id,pieceORpacket)
        let cart = this.props.cart
        let updateQty = this.props.update
        if(pieceORpacket == "piece"){
            if(operator == "dec"){
                cart[id]["pieceQty"] -= 1
                updateQty[id]["piece"] -= 1
            }else{
                cart[id]["pieceQty"] += 1
                updateQty[id]["piece"] += 1
            }
        }else{
            if(operator == "dec"){
                cart[id]["packetQty"] -= 1
                updateQty[id]["packet"] -= 1
            }else{
                cart[id]["packetQty"] += 1
                updateQty[id]["packet"] += 1
            }
        }
        this.props.updateCart(cart)
        this.props.updateQty(updateQty)
        this.setState({})
        // console.warn("cart")
    }
    componentDidMount(){
        this.setState({})
    }

    render() {
        // console.warn("total of constructor = ",this.total)
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
        total : state.total
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

        }
    }
}
export default connect(mapStateTOProps,mapDispatchTOProps)(cart)
