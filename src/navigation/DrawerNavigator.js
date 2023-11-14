import * as React from 'react';
import {Text} from 'react-native-elements';
import {createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTab from './ClientTab';
import {colors} from '../Global/styles';
import {Icon} from 'react-native-elements';
import BusinessConsole from '../Screens/BusinessConsole';
import DrawerContent from '../Components/DrawerContent';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return(
        <Drawer.Navigator
            drawerContent={props=><DrawerContent {...props}/>}
        
        >

      
      <Drawer.Screen 
  name="RootClientTab"
  component={RootClientTab}
  options={{
    drawerLabel: ({ focused, color }) => (
      <Text style={{ color: focused ? "#E11584" : colors.buttons , fontSize:16}}>
        Client
      </Text>
    ),
    headerShown: false,
    drawerIcon: ({ focused, size }) => (
      <Icon 
        type="material-community"
        name="home"
        color={focused ? "#E11584" : colors.buttons}
        size={size}
      />
    ),
  }}
/>

<Drawer.Screen 
  name="BusinessConsole"
  component={BusinessConsole}
  options={{
    drawerLabel: ({ focused, color }) => (
      <Text style={{ color: focused ? "#E11584" : colors.buttons , fontSize:16}}>
        Business console
      </Text>
    ),
    headerShown: false,
    drawerIcon: ({ focused, size }) => (
      <Icon 
        type="material"
        name="business"
        color={focused ? "#E11584" : colors.buttons}
        size={size}
      />
    ),
  }}
/>



        </Drawer.Navigator>
    )
}