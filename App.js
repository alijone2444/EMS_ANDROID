import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Text, Image } from 'react-native';
import SigninSignoutOption from './src/containers/signin_signup_screens/signin_signup_option_screen';
import SignInScreen from './src/containers/signin_signup_screens/signin_screen';
import SignUpScreen from './src/containers/signin_signup_screens/signup_screen';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/containers/signin_signup_screens/Home';
import AccountCreatedSucessful from './src/containers/signin_signup_screens/accountcreatedSucessfully';
import Notification from './src/containers/signin_signup_screens/notifications';

const App = () => {
  const [currentScreen, setCurrectScreen] = useState('SignUp-SignIn')

  const Stack = createNativeStackNavigator();

  const notificationScreenOptions = {
    headerShown: true,
    headerTransparent: true,
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
  };




  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SigninSignoutOption" component={SigninSignoutOption} options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" options={{ headerShown: false }} component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen name="home" options={{ headerShown: false }} component={HomePage} />
        <Stack.Screen name="AccountCreated" options={{ headerShown: false }} component={AccountCreatedSucessful} />
        <Stack.Screen
          name="Notifications"
          component={Notification}
          options={notificationScreenOptions}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;