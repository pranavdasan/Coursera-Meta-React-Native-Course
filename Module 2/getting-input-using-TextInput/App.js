import * as React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={appStyles.container}>

        <LittleLemonHeader />

        <View style={appStyles.welcomeScreenContainer}>
          <WelcomeScreen />
        </View>

        <LittleLemonFooter />

      </View>
    </KeyboardAvoidingView>

  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },

  welcomeScreenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333333'
  }
})