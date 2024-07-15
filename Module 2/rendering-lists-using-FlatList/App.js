import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <View style={appStyles.container}>

      <LittleLemonHeader />

      <View style={appStyles.menuContainer}>
        <MenuItems />
      </View>

      <LittleLemonFooter />

    </View>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  menuContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333333',
  }
})