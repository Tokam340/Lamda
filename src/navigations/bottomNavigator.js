import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HOME, CHAT, COINSTART, NOTIFICATIONS} from '../constants/routeName';
import {CoinsStack} from './stackNavigator';

import Home from '../screens/Home/index';
import Chat from '../screens/Chat/index';

import Notifications from '../screens/Notifications/index';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={CHAT} component={Chat} />
      <Tab.Screen name={COINSTART} component={CoinsStack} />
      <Tab.Screen name={NOTIFICATIONS} component={Notifications} />
    </Tab.Navigator>
  );
}