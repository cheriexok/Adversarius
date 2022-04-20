import React from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SelectS from './telas/SelectS';
import CriaPCS from './telas/CriaPCS';
import Login from './telas/LoginS';
import AtletaCad from './telas/3atletaCad';
import OrgCad from './telas/5orgCad';
import Exibepeneira from './telas/exibepeneira';
import Perfil from './telas/Perfil';
import Cad from './telas/2cad';
import Atletacadfinal from './telas/4atletaCadFinal';

import ActionBarImage from './telas/ActionBarImage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" screenOptions={{headerRight: () => <ActionBarImage />}} useLegacyImplementation={true}>
        <Drawer.Screen name="Select" component={SelectS}/>
        <Drawer.Screen name="CriaPCS" component={CriaPCS} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Atleta" component={AtletaCad} />
        <Drawer.Screen name="Organização" component={OrgCad} />
        <Drawer.Screen name="Peneira" component={Exibepeneira} />
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name='Cadastro' component={Cad} />


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
