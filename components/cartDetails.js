import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {connect} from "react-redux"

import Operator from "./operator"
class cartDetails extends React.Component{
    render(){
        const cart = this.props.cart
        let ids =  Object.getOwnPropertyNames(cart)
        let total = 0
        let counter = 0

        return (
            ids.map(id=>{

                const item = cart[id]
                if(item.pieceQty != 0){
                    total += item.pieceQty * item.piecePrice
                }
                if(item.packetQty != 0){
                    total += item.packetQty * item.packetPrice
                }
                counter += 1
                if(ids.length  == counter){
                    this.props.total(total)
                }
                // console.warn("total",total)
                return(

                    <View style={[styles.container]}>
                        <Text style={{fontSize: 18,marginBottom:3,marginTop:8}}>{item.item}</Text>
            
                        <View >
                            <View style={[styles.item,item.pieceQty == 0 ? {display:"none"}:{display:"flex"}]}>  
                                <Operator pressed={(operator)=>this.props.update(operator,id,"piece")} quantity={item.pieceQty}/>
                                <Text style={[styles.itemName,{fontSize:18}]}>{item.pieceName}</Text>
                                <Text style={styles.itemPrice }>Rs. {item.piecePrice * item.pieceQty}</Text>
                            </View>
                            <View style={[styles.item,item.packetQty == 0 ? {display:"none"}:{display:"flex"}]}>  
                                <Operator pressed={(operator)=>this.props.update(operator,id,"packet")} quantity={item.packetQty}/>
                                <Text style={[styles.itemName,{fontSize:18}]}>{item.packetName}</Text>
                                <Text style={styles.itemPrice }>Rs. {item.packetPrice * item.packetQty}</Text>
                            </View>
            
                        </View>
                        <View 
                            style={{borderColor: "gray",borderBottomWidth :3,width : 240,
                                marginTop:20,alignContent:"center",alignSelf:"center"}}>
                        </View>
            
                    </View>
                )
            })
            )
    }
}

const styles = StyleSheet.create({
    container : {
        // marginVertical : 25,
        marginHorizontal : 12
    },
    item : {
        // marginHorizontal :4,
        display : "flex",
        flexDirection : "row",
        margin : 4
        // alignSelf: "flex-end"
    },
    itemName :{
        paddingLeft : 12
    },
    itemPrice : {
        position: "absolute",
        right: 0,
        fontSize : 16
    }
})

const mapStateTOProps = (state) =>{
    return{
        cart : state.cart
    }
}
const mapDispatchTOProps = (dispatch) => {
    return{
        total : (updateTotal)=>{
            dispatch({
                type:"total",
                updateTotal
            })
        }
    }
}
export default connect(mapStateTOProps,mapDispatchTOProps)(cartDetails)
