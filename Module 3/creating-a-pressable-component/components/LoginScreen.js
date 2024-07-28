import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView, View, Pressable } from 'react-native';

export default function WelcomeScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, changeLoginState] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {loggedIn &&  <Text style={styles.title}>You are logged in!</Text>}

      {!loggedIn && (
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          keyboardDismissMode='on-drag'
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>
              Welcome Back!
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

          <Pressable 
          style={styles.button}
          onPress={() => changeLoginState(!loggedIn)}>
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>

        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center'
  },

  formContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5,
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

  button: {
    fontSize: 22,
    padding: 10,
    margin: 40,
    backgroundColor: '#EE9972',
    borderRadius: 30,
    width: Platform.OS == 'web' ? '20%' : '80%',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
  }
});
