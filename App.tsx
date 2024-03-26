import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Image } from 'react-native';
import SigninSignoutOption from './src/containers/signin_signup_screens/signin_signup_option_screen';
import SignInScreen from './src/containers/signin_signup_screens/signin_screen';
import SignUpScreen from './src/containers/signin_signup_screens/signup_screen';
import { useState } from 'react';
const App = () => {
  const [currentScreen, setCurrectScreen] = useState('SignUp-SignIn')
  return (
    <View>
      {currentScreen === 'SignUp-SignIn' && <SigninSignoutOption />}
      <SignInScreen />
      <SignUpScreen />
    </View>
  );
};

export default App;