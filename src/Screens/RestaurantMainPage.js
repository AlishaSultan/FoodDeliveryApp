import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React,{useState} from 'react';
import RestaurantHeader from '../Components/RestaurantHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { restaurantData } from '../Global/Data';
import {colors} from '../Global/styles'
import { Icon } from 'react-native-elements';
import { TabView,TabBar } from 'react-native-tab-view';
import MenuScreen from '../Screens/RestaurantTabs/MenuScreen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

export default function RestaurantMainPage({ navigation, route }) {
  const { restaurant } = route.params;
  const[routes]=useState([
    { key: 'first', title:'Menu'},
    { key: 'second', title:'Info'},
    { key: 'third', title:'Reviews'},
    { key: 'fourth', title:'Gallery'},
    
  ])

  const[index,setIndex] = useState(0)

  // Find the restaurant in the data array based on the name
  const selectedRestaurant = restaurantData.find((item) => item.restaurantName === restaurant);

  // If the restaurant is not found, you can handle it accordingly
  if (!selectedRestaurant) {
    return (
      <View style={styles.container}>
        <Text>Restaurant not found</Text>
      </View>
    );
  }

  const renderTabBar = props =>(
    <TabBar
       {...props}
       indicatorStyle = {{backgroundColor:colors.cardbackground}}
       tabStyle = {styles.tabStyle}
       scrollEnabled = {true}
       style = {styles.tab}
       labelStyle = {styles.tabLabel}
       contentContainerStyle = {styles.tabContainer}
    />
  )

  const UpdateRoute1 = ({ route }) => {
    
  };
  

  // If the restaurant is found, render the details
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RestaurantHeader id={selectedRestaurant.id} restaurantName={restaurant} navigation={navigation} />
          {selectedRestaurant.discount && (
            <View style={styles.view1}>
              <Text style={styles.text1}>GET {selectedRestaurant.discount}% OFF ON FOOD TOTAL</Text>
            </View>
          )}
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text2}>{selectedRestaurant.restaurantName}</Text>
              <Text style = {styles.text3}>{selectedRestaurant.foodType}</Text>
              <View style = {styles.view4}>
                 <Icon name = "star"
                       type = "material-community"
                       color = {colors.darkColor}
                       size= {15} 
                 />
                 <Text style = {styles.text4}>
                    {selectedRestaurant.averageReview}
                 </Text>
                 
                 <Icon name = "map-marker"
                       type = "material-community"
                       color = {colors.darkColor}
                       size= {15} 
                 />
                 <Text style = {styles.text6}>
                  {selectedRestaurant.farAway} mi away
                 </Text>

              </View>
              
            </View>
            <View style = {styles.view5}>
              <Text style = {styles.text18}>Collect</Text>
              <View style = {styles.view7}>
                <Text style = {styles.text7}>
                       {selectedRestaurant.collectTime}
                </Text>
                <Text style = {styles.text7}>
                   min
                </Text>

              </View>

            </View>
            <View style = {styles.view8}>
              <Text style = {styles.text9}>
                Delivery
              </Text>
              <View style = {styles.view9}>
                <Text style = {styles.text11}>
                  {selectedRestaurant.deliveryTime}
                </Text>
                <Text style = {styles.text11}>min</Text>

              </View>
              
            </View>
          </View>
        </View>
        <View style = {styles.view10}>
          <TabView
             navigationState={{index,routes}}
             renderScene={UpdateRoute1}
             onIndexChange={setIndex}
             initialLayout={initialLayout}
             renderTabBar={renderTabBar}
             tabBarPosition='top'
          />

        </View>

        {index === 0 && (
          <MenuScreen navigation={navigation} route={{ params: { restaurant } }} />
        )}
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:20
      
    },
    view1:{
      width:"100%",
      padding:3,
      alignItems:'center',
      justifyContent:'center',
    },
    text1:{
      color:colors.darkColor,
      fontSize:16,
      fontWeight:'bold',
      marginTop:5,
    },
    view2:{
      flexDirection:'row',
      flex:1,
      marginBottom:5,
      marginHorizontal:10,
      justifyContent:'space-between',
      marginTop:5,
    },
    view3:{
      flex:8
    },
    text2:{
      fontSize:20,
      fontWeight:'bold',
      color:colors.text,
    },
    text3:{
      fontSize:15,
      color:colors.text
    },
    view4:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:5
    },
    text4:{
      
      fontSize:13,
      color:colors.text,
      marginLeft:2,
    },
    text5:{
      
      fontSize:13,
      color:colors.text,
      marginLeft:2,
      marginRight:5,
    },
    text6:{
      
      fontSize:15,
      color:colors.text,
      marginLeft:0,
      fontWeight:'bold'
    },
    view5:{
      flex:3,
      alignItems:'center',
    },
    text18:{
      fontSize:15,
      fontWeight:'bold',
      color:colors.darkColor,
    },
    view7:{
      width:40,
      height:40,
      alignItems:'center',
      borderRadius:20,
      justifyContent:'space-around',
      
    },
    text7:{
      fontSize:16,
      color:colors.text,
      marginTop:5,
      
    },
    view8:{
      flex:3,
      alignItems:'center',
    },
    text9:{
      fontSize:15,
      fontWeight:"bold",
      color:colors.darkColor,
    },
    view9:{
      width:50,
      height:48,
      backgroundColor:colors.buttons,
      alignItems:'center',
      borderRadius:50,
      justifyContent:'space-around',
    },
    text10:{
       fontSize:16,
       fontWeight:'bold',
       color:colors.cardbackground,
       marginTop:5,
    },
    text11:{
      fontSize:13,
      color:colors.cardbackground,
      marginBottom:0
    },
    view10:{
      elevation:10,
      backgroundColor:colors.pagebackground,
      marginTop:7,
    },
    view11:{
      backgroundColor:colors.buttons,
      height:50,
      alignItems:'center',
      marginBottom:0,
    },
    view12:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    text12:{
      padding:10,
      fontWeight:'bold',
      fontSize:18,
      color:colors.cardbackground,

    },
    view13:{
      borderWidth:1,
      marginRight:10,
      borderColor:colors.cardbackground,
      borderRadius:6,
      paddingBottom:2,
    },
    text13:{
      paddingHorizontal:3,
      fontWeight:'bold',
      fontSize:18,
      color:colors.cardbackground,
    },
    tab:{
      paddingTop:0,
      backgroundColor:colors.buttons,
      justifyContent:'center',
      alignItems:'center'

    },
    tabContainer:{
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
    },
    tabLabel:{
      fontWeight:'bold',
      color:colors.cardbackground,
    },
    tabStyle:{
      width:SCREEN_WIDTH/4,
      maxHeight:45,
    },








})