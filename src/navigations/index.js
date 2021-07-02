import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './drawerNavigator';
import AuthNavigator from './AuthStackNavigator';


export default function AppNavContainer() {

  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator /> }
    </NavigationContainer>
  );
}