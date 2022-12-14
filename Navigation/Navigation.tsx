import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import TandC from '../Screens/TermsCondition';
import ForgotPassword from '../Screens/ForgotPassword';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          animationDuration: 20,
          headerStyle: {backgroundColor: '#fa8832'},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Terms & Conditions" component={TandC} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
