import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SelectS from './telas/SelectS'; // ?
import CriaPCS from './telas/CriaPCS'; 
import Login from './telas/LoginS'; // 1
import AtletaCad from './telas/atletaCad'; // 2
import OrgCad from './telas/orgCad'; // 3
import Exibepeneira from './telas/exibepeneira';

import ActionBarImage from './telas/ActionBarImage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" screenOptions={{headerRight: () => <ActionBarImage />}}>
        <Drawer.Screen name="Select" component={SelectS}/>
        <Drawer.Screen name="CriaPCS" component={CriaPCS} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Atleta" component={AtletaCad} />
        <Drawer.Screen name="Organização" component={OrgCad} />
        <Drawer.Screen name="Peneira" component={Exibepeneira} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
};

 const styles = StyleSheet.create({
    image: {
      height: 100,
      width: 100,
      position: 'absolute'
    }
  })
