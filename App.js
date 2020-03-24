import React from 'react';

import Home from "./Pages/home"
import InsideShopDetails from "./Pages/insideShopDetail"

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Button} from "react-native"
const Stack = createStackNavigator();

import {Provider} from "react-redux"
import reducer from "./store/store"
import { createStore } from 'redux';
const store = createStore(reducer)


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

import { StyleSheet, Text, View,TextInput ,TouchableHighlight} from 'react-native';

export default function App() {
  return (
    
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen  name="Home" component={InsideShopDetails} />
          <Stack.Screen name="Details" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
     </Provider> 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '	background-color: rgba(185, 185, 185, 0.253)',
  },
});
