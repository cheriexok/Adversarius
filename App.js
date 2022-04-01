import React from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SelectS from './telas/SelectS';
import CriaPCS from './telas/CriaPCS';
import Login from './telas/Login';

import ActionBarImage from './telas/ActionBarImage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" screenOptions={{headerRight: () => <ActionBarImage />}}>
        <Drawer.Screen name="Select" component={SelectS}/>
        <Drawer.Screen name="CriaPCS" component={CriaPCS} />
        <Drawer.Screen name="Login" component={Login} />
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