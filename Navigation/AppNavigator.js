import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import IndexScreen from '../screens/IndexScreen';
import SignupScreen from '../screens/SignupScreen';
import TermsAndConditions from '../screens/TermsAndConditions';
import PrivacyPolicy from '../screens/PrivacyPolicy';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Terms" component={TermsAndConditions} />
        <Stack.Screen name="Privacy" component={PrivacyPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
