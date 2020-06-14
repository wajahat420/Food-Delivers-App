import React from 'react';

import Home from "./Pages/home"
import InsideShopDetails from "./Pages/insideShopDetail"
import Cart from "./Pages/cart"

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {Provider} from "react-redux"
import reducer from "./store/store"
import { createStore } from 'redux';
const store = createStore(reducer)


import { StyleSheet, Text, View,TextInput ,TouchableHighlight} from 'react-native';

export default function App() {
  return (
    
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen  name="insideShopDetails" component={InsideShopDetails} />
          <Stack.Screen  name="cart" component={ Cart } />
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


// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import * as React from 'react';
// import { Platform, StatusBar, StyleSheet, View ,Text} from 'react-native';

// import useCachedResources from './hooks/useCachedResources';
// import BottomTabNavigator from './navigation/BottomTabNavigator';
// import LinkingConfiguration from './navigation/LinkingConfiguration';

// const Stack = createStackNavigator();

// export default function App(props) {
//   const isLoadingComplete = useCachedResources();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <View style={styles.container}>
//         <Text>HEYYYYYYYYYY</Text>
//         {/* {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
//         <NavigationContainer linking={LinkingConfiguration}>
//           <Stack.Navigator>
//             <Stack.Screen name="Root" component={BottomTabNavigator} />
//           </Stack.Navigator>
//         </NavigationContainer> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
