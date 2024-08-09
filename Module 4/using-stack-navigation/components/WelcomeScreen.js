import { View, Text, StyleSheet, Image, Platform } from 'react-native';

export default function WelcomeScreen() {


  return (
    <View style={{ flexGrow: 1, backgroundColor: '#333333' }}>
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
    </View>
  );
}

const welcomeScreenStyles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },

  image: {
    height: Platform.OS === 'web' ? 100 : 100,
    width: Platform.OS === 'web' ? 100 : 100,
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
    paddingHorizontal: Platform.OS === 'web' ? 100 : 20,
    fontSize: 25,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
