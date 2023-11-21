import React from 'react';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import SearchScreen from '../Screens/SearchScreen';
import SearchResult from '../Screens/SearchResult';

const ClientSearch = createStackNavigator()

export default function ClientStack() {
    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}}/>
            <ClientSearch.Screen name="SearchResult" component={SearchResult} options={{headerShown:false}}/>

            </ClientSearch.Navigator>
    )
}

