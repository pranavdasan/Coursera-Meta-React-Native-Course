import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View>
      <Text style={welcomeScreenStyles.title}>
        Welcome to Little Lemon
      </Text>
      
      <Text style={welcomeScreenStyles.intro}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

const welcomeScreenStyles = StyleSheet.create({
  title: {
    padding: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#EDEFEE',
    textAlign: 'center'
  },

  intro: {
    padding: 20,
    fontSize: 25,
    color: '#EDEFEE',
    textAlign: 'center'
  }
})
