import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Platform } from 'react-native';

export default function WelcomeScreen() {


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={welcomeScreenStyles.imageContainer}>
        <Image style={welcomeScreenStyles.image} source={require('../img/LittleLemonLogo.png')} resizeMode='contain' />
      </View>

      <Text style={welcomeScreenStyles.title}>
        Welcome to Little Lemon
      </Text>

      <Text style={welcomeScreenStyles.intro}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const welcomeScreenStyles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    padding: 20
  },

  image: {
    height: Platform.OS === 'web' ? 100 : '100%',
    width: Platform.OS === 'web' ? 100 : '100%',
  },

  title: {
    padding: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#EDEFEE',
    textAlign: 'center',
  },

  intro: {
    padding: 20,
    paddingHorizontal: 100,
    fontSize: 25,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
