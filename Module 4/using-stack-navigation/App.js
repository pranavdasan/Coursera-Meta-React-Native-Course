import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={appStyles.container}>
        <LittleLemonHeader />

        <Stack.Navigator>
          <Stack.Screen 
            name="Log In" 
            component={LoginScreen} 
            options={{ 
              headerShown: false 
            }} 
          />
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
            options={{ 
              headerShown: false 
            }} 
          />
        </Stack.Navigator>

        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
