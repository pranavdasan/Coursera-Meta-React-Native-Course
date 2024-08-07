import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.header}>
        Little Lemon
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: { backgroundColor: '#EE9972' },
  header: {
    padding: 40,
    paddingBottom: 20,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
})