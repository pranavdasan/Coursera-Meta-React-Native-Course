import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.footer}>
        All rights reserved by Little Lemon, 2024
      </Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    padding: 2
  },

  footer: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center'
  }
})