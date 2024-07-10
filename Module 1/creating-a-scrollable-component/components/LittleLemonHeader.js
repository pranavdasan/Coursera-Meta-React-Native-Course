import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          padding: 40,
          paddingBottom: 20,
          fontSize: 30,
          fontWeight:'bold',
          color: 'black',
          textAlign: 'center'
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
