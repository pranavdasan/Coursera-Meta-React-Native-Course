import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

export default function WelcomeScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        keyboardDismissMode='on-drag'
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>
            Log In
          </Text>

          <TextInput
            style={styles.input}
            value={email}
            placeholder='Email'
            onChangeText={onChangeEmail}
            textContentType='emailAddress'
            keyboardType={'email-address'}
          />

          <TextInput
            style={styles.input}
            value={password}
            placeholder='Password'
            onChangeText={onChangePassword}
            textContentType='password'
            secureTextEntry={true}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  formContainer: {
    alignItems: 'center',
  },
  title: {
    padding: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 5,
    marginVertical: 10,
    padding: 15,
    fontSize: 20,
    borderColor: '#EE9972',
    borderRadius: 5,
    backgroundColor: 'white',
    width: Platform.OS == 'web' ? '30%' : '100%',  
  },
});
