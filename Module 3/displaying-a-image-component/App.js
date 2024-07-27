import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (

    <View style={appStyles.container}>

      <LittleLemonHeader />

      <WelcomeScreen style={appStyles.welcomeScreenContainer} />

      <LittleLemonFooter />

    </View>

  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#333333'
  }
})