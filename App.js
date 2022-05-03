import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SelectS from './telas/SelectS';
import Peneira from './telas/Peneira';
import Login from './telas/LoginS';
import AtletaCad from './telas/3atletaCad';
import OrgCad from './telas/5orgCad';
import Exibepeneira from './telas/exibepeneira';
import Perfil from './telas/Perfil';
import Cad from './telas/2cad';
import Atletacadfinal from './telas/4atletaCadFinal';
import Orgcadfinal from './telas/6orgCadFinal';
import Peneirac from './telas/peneira2';
import Camp from './telas/CampS';
import Peneirar from './telas/peneirafinal';


import ActionBarImage from './telas/ActionBarImage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};
export function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerRight: () => <ActionBarImage /> }} useLegacyImplementation={true}>
      <Stack.Screen name="Login" component={Login} /*options={{drawerHideStatusBarTrue}}*/ />
      <Stack.Screen name='Cadastro' component={Cad} />
      <Stack.Screen name='Organização' component={OrgCad} />
      <Stack.Screen name='Atleta' component={AtletaCad} />
      <Stack.Screen name='Finalize' component={Atletacadfinal} />
      <Stack.Screen name='Complemente' component={Orgcadfinal} />
      <Stack.Screen name='Campeonato' component={Camp} />
      <Stack.Screen name='Peneira' component={Peneira} />
      <Stack.Screen name='Continuar' component={Peneirac} />
      <Stack.Screen name='Peneirar' component={Peneirar} />
      <Stack.Screen name='Exibe' component={Exibepeneira} />
      <Stack.Screen
        name='TelaInicial'
        component={InitialRoute}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};


export function InitialRoute() {
  return (
    <Drawer.Navigator initialRouteName="Select" screenOptions={{ headerRight: () => <ActionBarImage /> }} useLegacyImplementation={true}>
      <Drawer.Screen name="Select" component={SelectS} />
      <Drawer.Screen name="Login" component={Login} /*options={{drawerHideStatusBarTrue}}*/ />
      <Drawer.Screen name="Perfil" component={Perfil} />
      {/* <Drawer.Screen name='Campeonato' component={Camp} options={{headerShown: false}} /> */}
       
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    position: 'absolute'
  }
})
