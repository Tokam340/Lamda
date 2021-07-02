import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {MISSIONS, ACTUALITES, LAMDA_MONEY} from '../constants/routeName';
import {MyTabs} from './bottomNavigator';
import Missions from '../screens/Missions/index';
import Actualites from '../screens/Actualites/index';
import LamdaMoney from '../screens/LamdaMoney/index';
import DrawerContainer from '../components/DrawerContainer';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => <DrawerContainer navigation={navigation} />}
    >
      <Drawer.Screen name="Feed" component={MyTabs} />
      <Drawer.Screen name={MISSIONS} component={Missions} />
      <Drawer.Screen name={ACTUALITES} component={Actualites} />
      <Drawer.Screen name={LAMDA_MONEY} component={LamdaMoney} />
    </Drawer.Navigator>
  );
}