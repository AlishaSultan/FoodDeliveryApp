import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { restaurantData, specialData } from '../../Global/Data';
import { colors } from '../../Global/styles';

export default function MenuScreen({ navigation, route }) {
  // Use optional chaining to avoid errors if route or route.params is undefined
  const { restaurant } = route?.params || {};
  const selectedRestaurant = restaurantData.find((item) => item.restaurantName === restaurant);

  if (!selectedRestaurant) {
    return (
      <View style={styles.container}>
        <Text>Restaurant not found</Text>
      </View>
    );
  }

  const handlePress = (product) => {
    // Handle press action if needed
  };

  return (
    <View style={styles.container}>
      <View>
        {specialData.map((specialItem) => (
          <TouchableOpacity
            key={specialItem.key}
            onPress={() => handlePress(specialItem)}
          >
            <View style={styles.view2}>
              <Icon name="star" type="material-community" color="gold" />
              <Text style={styles.text1}>{specialItem.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View>
        {/* Display product names for the selected restaurant */}
        {selectedRestaurant.productData.map((product) => (
          <TouchableOpacity
            key={product.name}
            onPress={() => handlePress(product)}
          >
            <View style={styles.view2}>
              <Text style={styles.text1}>{product.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: colors.grey5,
  },
  text1: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
