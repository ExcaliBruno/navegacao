import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'blue',
      tabBarLabelStyle: {fontSize: 30},
      tabBarStyle: {height: 70},
      //tabBarIcon: () => null, // Remove ícone e o espaço dele
    }} initialRouteName="TelaB"
  >
    <Tab.Screen name="TelaA" component={TelaA} options={{ tabBarLabel: 'Tela A' }} />
    <Tab.Screen name="TelaB" component={TelaB} options={{ tabBarLabel: 'Tela B' }} />
    <Tab.Screen name="TelaC" component={TelaC} options={{ tabBarLabel: 'Tela C' }} />
  </Tab.Navigator>
);
