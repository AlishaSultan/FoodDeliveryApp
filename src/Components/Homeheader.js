import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import {Icon , withBadge} from 'react-native-elements';
import {colors,parameters} from '../Global/styles'

export default function Homeheader({navigation}) {

const BadgeIcon = withBadge(0)(Icon)
    return(
        <View style = {styles.header}>
              <View style = {{alignItems:"center" , justifyContent:"center" , marginLeft:15}}>
                  <Icon 
                   type = "material-community"
                   name = "menu"
                   color = {colors.cardbackground}
                   size ={33 }
                   onPress = {()=>{
                     navigation.toggleDrawer()
                   }}/>
                  
                  
              </View>

              <View style = {{alignItems:"center",justifyContent:"center" , marginLeft:115}}>
                <Text style = {{color:colors.cardbackground , fontSize:26 , fontWeight:"bold"}}>XFood</Text>
              </View>

              <View style = {{alignItems:"center",justifyContent:"center" , marginLeft:115 , marginTop:3}}>
                <BadgeIcon 
                   type = "material-community"
                   name = "cart"
                   size = {32}
                   color = {colors.cardbackground}
                />
              </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight
    }
})