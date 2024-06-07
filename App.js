import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated } from './src/ReduxStore/actions/isAuthenticated';
import Background from './src/components/Wrappers/Background';
import LottieAnimation from './src/components/lottie/lottie';
import LogoAnimated from './src/resources/lottie/LogoScreen.json';
import HomePage from './src/containers/Home';
import AccountCreatedSucessful from './src/containers/accountcreatedSucessfully';
import Notification from './src/containers/notifications';
import ShowEvents from './src/containers/ShowEvents';
import SigninSignoutOption from './src/containers/signin_signup_screens/signin_signup_option_screen';
import SignInScreen from './src/containers/signin_signup_screens/signin_screen';
import SignUpScreen from './src/containers/signin_signup_screens/signup_screen';
import Chatbot from './src/containers/chatbotScreen/chatbot';
import Societies from './src/containers/Societies/societies';
import Profile from './src/containers/Profile/profile';
import TermsAndServices from './src/components/termsAndServices/termsAndServices';
import TourComponent from './src/components/Tour/tour';
import OpenedEvent from './src/containers/EventOpenScreen/eventopened';
import { getToken } from './src/components/localStorage/localStorageToken';
import LoadingScreen from './src/components/LoadingScreen/loading';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const notificationScreenOptions = {
  headerShown: true,
  headerTransparent: true,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTintColor: 'white',
  headerTitleAlign: 'center',
};

const tabScreensOption = {
  headerTransparent: true,
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: '600',
    fontSize: 25
  },
  headerTitleAlign: 'center'
};

const tabNavigator = {
  tabBarStyle: {
    backgroundColor: 'rgba(0,0,0,1)', // Set background color to transparent
    borderTopWidth: 0, // Remove top border
  },
  tabBarActiveTintColor: 'purple', // Set active tab color to purple
};

const AuthStack = ({ route }) => {
  const { isAuthenticated } = route.params || {};

  return (
    <Stack.Navigator>
      <Stack.Screen name="SigninSignoutOption" component={SigninSignoutOption} options={{ headerShown: false }} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="tour" component={TourComponent} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Terms and Condition" component={TermsAndServices} options={notificationScreenOptions} />
      <Stack.Screen name="AccountCreated" component={AccountCreatedSucessful} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabNavigator}>
      <Tab.Screen
        name="home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="home" size={20} color={focused ? 'purple' : 'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="Societies"
        component={Societies}
        options={{
          ...tabScreensOption,
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="users" size={20} color={focused ? 'purple' : 'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="Chatbot"
        component={Chatbot}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="comments" color={focused ? 'purple' : 'grey'} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyEvents"
        component={ShowEvents}
        options={{
          ...tabScreensOption,
          title: 'Events',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="calendar" size={20} color={focused ? 'purple' : 'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="user" size={20} color={focused ? 'purple' : 'grey'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}; const App = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.IsAuthenticated);
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await getToken('authToken'); // Add await here
        dispatch(setAuthenticated(!!token));
        console.log('token is', token);
      } catch (error) {
        console.error('Failed to fetch the token', error);
      } finally {
      }
    };
    checkToken();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="loadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        {isAuthenticated.isAuthenticated ? (
          <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            initialParams={{ isAuthenticated: isAuthenticated.isAuthenticated }}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen name="Notifications" component={Notification} options={notificationScreenOptions} />

        <Stack.Screen name="on-open-event" component={OpenedEvent} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
