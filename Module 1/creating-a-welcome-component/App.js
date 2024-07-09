import * as React from 'react';
import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <View style={{
      flex: 1, 
      justifyContent: 'space-between'
    }}>
      
      <LittleLemonHeader />

      <View style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#495E57',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <WelcomeScreen />
      </View>

      <LittleLemonFooter />
    </View>
  );
}