import { View, Text } from 'react-native';
import React from 'react';
import RestaurantHeader from '../Components/RestaurantHeader';

export default function RestaurantMainPage({ navigation, route }) {
  const { id, restaurant } = route.params;

  return (
    <View>
      <RestaurantHeader id={id} restaurantName={restaurant} navigation={navigation} />
      
    </View>
  );
}
