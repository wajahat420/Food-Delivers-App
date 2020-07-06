import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Input from "../components/textInput"
import Header from "../components/header"

export default class Search extends Component {
    constructor({navigation}){
        super()
        this.navigation = navigation
    }
    render() {
        return (
            <View>
                <Header displaySearch="none"
					backPress={()=>	this.navigation.navigate('home')} 
                    />
                <Input
                    placeholder="Seach what you want to Buy."             
                />  
            </View>
        )
    }
}
