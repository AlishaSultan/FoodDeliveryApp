import React from 'react';
import {createStackNavigator ,TransitionPresets} from '@react-navigation/stack'
import SignWelcomeScreen from '../Screens/SignWelcomeScreen';
import SignInScreen from '../Screens/SignInScreen';
import RootClientTab from './ClientTab';
import MapScreen from '../Screens/MapScreen';
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
                name = "RootClientTab"
                component={RootClientTab}
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