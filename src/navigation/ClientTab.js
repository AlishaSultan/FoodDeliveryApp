import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon } from 'react-native-elements';
import Home from '../Screens/Home';
import SearchScreen from '../Screens/SearchScreen';
import Orders from '../Screens/Orders';
import MyAccountScreen from '../Screens/MyAccountScreen';
import {colors} from '../Global/styles'

const ClientTabs = createBottomTabNavigator();

export default function RootClientTab() {
  return (
    <ClientTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#E11584",
        tabBarInactiveTintColor: "#F9629F", // Color for inactive tabs
        headerShown: false,
        tabBarLabel: getTabBarLabel(route),
        tabBarIcon: ({ color, size }) => getTabBarIcon(route, color, size),
        tabBarStyle: { display: 'flex'},
      })}
    >
      <ClientTabs.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "Home", tabBarIcon: ({ color, size }) => <Icon name="home" type="material" color={color} size={size} /> }}
      />
      <ClientTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ tabBarLabel: "Search", tabBarIcon: ({ color, size }) => <Icon name="search" type="material" color={color} size={size} /> }}
      />
      <ClientTabs.Screen
        name="Orders"
        component={Orders}
        options={{ tabBarLabel: "Orders", tabBarIcon: ({ color, size }) => <Icon name="view-list" type="material" color={color} size={size} /> }}
      />
      <ClientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{ tabBarLabel: "Account", tabBarIcon: ({ color, size }) => <Icon name="person" type="material" color={color} size={size} /> }}
      />
    </ClientTabs.Navigator>
  );
}

export const getTabBarLabel = (route) => {
  return route.name;
};

export const getTabBarIcon = (route, color, size) => {
  return <Icon name="home" type="material" color={color} size={size} />;
};
