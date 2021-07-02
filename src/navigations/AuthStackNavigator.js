import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {SIGN_UP1, SIGN_UP2, START} from '../constants/routeName';
import Start from '../screens/Start/index';
import SignUp1 from '../screens/SignUp1/index';
import SignUp2 from '../screens/SignUp2/index';
import colors from '../assets/themes/colors';


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={START} 
        component={Start} 
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name={SIGN_UP1} 
        component={SignUp1} 
        options={{
          title: "ENREGISTREMENT",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.white,
            fontWeight: 'bold'
          },
          headerTintColor: colors.white,
          headerTransparent: true
        }}
        />

      <Stack.Screen 
        name={SIGN_UP2} 
        component={SignUp2} 
        options={{
          title: "ENREGISTREMENT",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.white,
            fontWeight: 'bold'
          },
          headerTintColor: colors.white,
          headerTransparent: true
        }}
        />
    </Stack.Navigator>
  );
}