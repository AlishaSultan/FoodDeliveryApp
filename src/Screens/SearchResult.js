import React from 'react';
import { StyleSheet,Text,View,Dimensions} from 'react-native';
import SearchScreen from './SearchScreen';
import SearchResultCard from '../Components/SearchResultCard';
import { restaurantData } from '../Global/Data';
import {colors} from '../Global/styles';
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function SearchResult({navigation,route}) {
    return (
        <View style = {styles.container}>
            <View>
            <Text style = {styles.listHeader}>{restaurantData.length } Search Result for {route.params.item}
            </Text>
            </View>

            <SearchResultCard 
               screen_width = {SCREEN_WIDTH}
               images = {restaurantData[0].images}
               averageReview = {restaurantData[0].averageReview}
               numberofReview = {restaurantData[0].numberofReview}
               restaurantName={restaurantData[0].restaurantName}
               farAway={restaurantData[0].farAway}
               businessAddress={restaurantData[0].businessAddress}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
       container:{
        flex:1,
       
       },

       listHeader:{
        color:colors.darkColor,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:15,
        fontWeight:'bold',
       }

})

