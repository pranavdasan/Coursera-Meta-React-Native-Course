import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <Text style={welcomeScreenStyles.title}>
        Welcome to Little Lemon
      </Text>

      <Text style={welcomeScreenStyles.intro}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>

      <TextInput
        style={welcomeScreenStyles.input}
        value={firstName}
        placeholder='First Name'
        onChangeText={onChangeFirstName}
      />

      <TextInput
        style={welcomeScreenStyles.input}
        value={lastName}
        placeholder='Last Name'
        onChangeText={onChangeLastName}
      />

      <TextInput
        style={[welcomeScreenStyles.input,welcomeScreenStyles.messageInput]}
        value={message}
        placeholder='Message...'
        onChangeText={onChangeMessage}
        multiline
      />
    </ScrollView>
  );
}

const welcomeScreenStyles = StyleSheet.create({
  title: {
    padding: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#EDEFEE',
    textAlign: 'center',
  },

  intro: {
    padding: 20,
    fontSize: 25,
    color: '#EDEFEE',
    textAlign: 'center',
  },

  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 5,
    padding: 15,
    fontSize: 20,
    borderColor: '#EE9972',
    borderRadius: 5,
    backgroundColor: 'white',
  },

  messageInput: {
    height: 90, // Set a minimum height
    verticalAlign: 'top'
  },
});
