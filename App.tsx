import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Text, Image } from 'react-native';
import SigninSignoutOption from './src/containers/signin_signup_screens/signin_signup_option_screen';
import SignInScreen from './src/containers/signin_signup_screens/signin_screen';
import SignUpScreen from './src/containers/signin_signup_screens/signup_screen';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {
  const [currentScreen, setCurrectScreen] = useState('SignUp-SignIn')

  const Stack = createNativeStackNavigator();
  const [student, setStudent] = useState({ ID: 202, REG: 322221, department: 'cs' })


  useEffect(() => {
    setStudent({ ...student, REG: student.REG + 1 });
    console.log(student)
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SigninSignoutOption"
          component={SigninSignoutOption}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignInScreen" options={{ headerShown: false }} component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" options={{ headerShown: false }} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;