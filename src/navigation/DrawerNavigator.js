import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTab from './ClientTab';
import {colors} from '../Global/styles';
import {Icon} from 'react-native-elements';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return(
        <Drawer.Navigator>
      
         <Drawer.Screen 
            name = "RootClientTab"
            component={RootClientTab}

            options = {{
                title:'Client',
                headerShown:false,
                drawerIcon:({focussed,size})=>(
                    <Icon 
                     type = "material-community"
                     name = 'home'
                     color = {focussed?"#E11584":colors.buttons}
                     size = {size}

                    
                    
                    />
                )

            }}
         
         
         />

        </Drawer.Navigator>
    )
}