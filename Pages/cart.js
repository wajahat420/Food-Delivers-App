import React, { Component } from 'react'
import CartDetails from "../components/cartDetails"

import { Text, View } from 'react-native'

export default class cart extends Component {
    render() {
        return (
            <View>
                <CartDetails/>
            </View>
        )
    }
}
