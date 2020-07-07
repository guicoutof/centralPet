import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'

import Home from './pages/Home';
import Hosts from './pages/Hosts';
import Welcome from './pages/Welcome';
import Host from './pages/Host';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function drawerNavigator(){
  return(
    <Drawer.Navigator drawerStyle={{
      backgroundColor: '#ffffff',
      width: 240,
    }} drawerContentOptions={{
      activeBackgroundColor:'#CFD8DC',
      labelStyle:{color:'#424242'}
    }}>
      <Drawer.Screen name="Welcome" component={Welcome} options={{ title: 'Inicio',
        drawerIcon: () => (<Icon name='home' type='font-awesome' color='#F08080' /> ) }} />
      <Drawer.Screen name="Hosts" component={Hosts} options={{ title: 'Hosts',
        drawerIcon: () => (<Icon name='user' type='font-awesome' color='#F08080' /> ) }} />
      <Drawer.Screen name="SignOut" component={Home} options={{ title: 'Sign Out',
        drawerIcon: () => (<Icon name='sign-out' type='font-awesome' color='#F08080' /> ) }} />
      
    </Drawer.Navigator>
    )
  }
  
  function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Drawer" component={drawerNavigator} />
          <Stack.Screen name="Host" component={Host} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
export default Routes;