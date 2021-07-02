import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HOME, CHAT, NOTIFICATIONS, COINS, LAMDA_MONEY, ACTUALITES} from '../constants/routeName';


import Coins from '../screens/Coins/index';
import LamdaMoney from '../screens/LamdaMoney/index';
import Actualites from '../screens/Actualites/index';
import colors from '../assets/themes/colors';

const Stack = createStackNavigator();


export function CoinsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={COINS} 
        component={Coins} 
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name={LAMDA_MONEY} 
        component={LamdaMoney} 
        options={{
                  title: 'LAMDA',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                                      color: colors.primary1,
                                      fontWeight: 'bold'
                                    },
                  headerTintColor: colors.primary1
                }}
        />

      <Stack.Screen 
        name={ACTUALITES} 
        component={Actualites} 
        options={{
                  title: 'LAMDA',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                                      color: colors.primary1,
                                      fontWeight: 'bold'
                                    },
                  headerTintColor: colors.primary1
                }}
        />
    </Stack.Navigator>
  );
}