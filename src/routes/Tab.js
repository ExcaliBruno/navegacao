import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'blue',
      tabBarLabelStyle: { fontSize: 20 },
      tabBarStyle: { height: 70 },
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'TelaA') {
          iconName = 'home';
        } else if (route.name === 'TelaB') {
          iconName = 'list';
        } else if (route.name === 'TelaC') {
          iconName = 'settings';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    initialRouteName="TelaB"
  >
    <Tab.Screen name="TelaA" component={TelaA} options={{ tabBarLabel: 'Tela A' }} />
    <Tab.Screen name="TelaB" component={TelaB} options={{ tabBarLabel: 'Tela B' }} />
    <Tab.Screen name="TelaC" component={TelaC} options={{ tabBarLabel: 'Tela C' }} />
  </Tab.Navigator>
);
