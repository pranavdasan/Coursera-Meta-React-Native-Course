import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LoginScreen from './components/LoginScreen';

export default function App() {
  return (

    <View style={appStyles.container}>

      <LittleLemonHeader />

      <View style={appStyles.loginScreen}>
        <LoginScreen />
      </View>

      <LittleLemonFooter />

    </View>

  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },

  loginScreen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333333',
    justifyContent:'center'
  }
})