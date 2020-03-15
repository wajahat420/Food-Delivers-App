import React from 'react';
import Header from "./components/header"
import Footer from "./components/footer"
import Caterories from "./components/CategoriesSlider"
// import { Icon, } from 'react-native-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, Text, View,TextInput ,TouchableHighlight} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Caterories/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // margin: 5,
    // marginTop:35
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
