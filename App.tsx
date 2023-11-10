import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import {colors,title} from './src/Global/styles';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />
      

      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
