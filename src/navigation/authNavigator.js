import React from 'react';
import {createStackNavigator ,TransitionPresets} from '@react-navigation/stack'
import SignWelcomeScreen from '../Screens/SignWelcomeScreen';
import SignInScreen from '../Screens/SignInScreen';
import MapScreen from '../Screens/MapScreen';
import DrawerNavigator from './DrawerNavigator';

const Auth = createStackNavigator();

export default function AuthStack() {

    return (
       <Auth.Navigator>

           <Auth.Screen 
                name = "SignWelcomeScreen"
                component={SignWelcomeScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

           <Auth.Screen 
                name = "SignInScreen"
                component={SignInScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

              <Auth.Screen 
                name = "DrawerNavigator"
                component={DrawerNavigator}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen 
                name = "MapScreen"
                component={MapScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
       </Auth.Navigator>



 
    )
}