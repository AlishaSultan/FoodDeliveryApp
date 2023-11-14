import React , {useState , useEffect} from 'react';

import {
    View,
    Text,
    Linking,
    Pressable,
    Alert,
    Switch,
    StyleSheet
}from 'react-native'

import { DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { Avatar,Button , Icon} from 'react-native-elements';
import {colors} from '../Global/styles';
export default function DrawerContent(props){
    return(
        <View style = {styles.container}>
            <DrawerContentScrollView {...props}>
                <View style = {{backgroundColor:colors.buttons}}>
            <View style = {{flexDirection:'row' , alignItems:'center' ,  paddingLeft:15 , paddingVertical:15}}>
                <Avatar 
                    rounded
                    avatarStyle={styles.avatar}
                    size = {75}
                    source = {{uri:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/26/09/mcdonalds-bigvegants.jpg?width=1200"}}

                />

                <View style = {{paddingLeft:8}}>
                    <Text style = {{fontWeight:'bold',color:"white" , fontSize:18}}>Alisha Sultan</Text>
                    <Text style = {{color:"white" , fontSize:13}}>alishasultan0123@gmail.com</Text>
                </View>

                

                
            </View>

            <View style = {{flexDirection:'row',justifyContent:'space-evenly',paddingBottom:5}}>

            <View style = {{flexDirection:'row' , marginTop:0}}>
                    <View style = {{marginLeft:10, alignItems:'center' , justifyContent:'center'}}>
                          <Text style = {{fontWeight:'bold',color:"white" , fontSize:18}}>1</Text>
                          <Text style = {{color:"white",fontSize:14}}>My Favorites</Text>
                    </View>
                </View>

                <View style = {{flexDirection:'row' , marginTop:0}}>
                    <View style = {{marginLeft:10 , alignItems:'center' , justifyContent:'center'}}>
                          <Text style = {{fontWeight:'bold',color:"white" , fontSize:18}}>0</Text>
                          <Text style = {{color:"white",fontSize:14}}>My Cart</Text>
                    </View>
                </View>

            </View>
            </View>

            
            <DrawerItemList {...props}/>

            <DrawerItem 
                 label={() => (
                    <Text style={{ color: colors.buttons, fontSize: 16 }}>
                      Payment
                    </Text>
                  )}
                 icon = {({color , size})=>(
                    <Icon
                        type = "material-community"
                        name = "credit-card-outline"
                        color = {colors.buttons}
                        size = {size}
                    
                    />
                 )}
            />

                <DrawerItem 
                 label={() => (
                    <Text style={{ color: colors.buttons, fontSize: 16 }}>
                      Promotions
                    </Text>
                  )}
                 icon = {({color , size})=>(
                    <Icon
                        type = "material-community"
                        name = "tag-heart"
                        color = {colors.buttons}
                        size = {size}
                    
                    />
                 )}
            />

                <DrawerItem 
                 label={() => (
                    <Text style={{ color: colors.buttons, fontSize: 16 }}>
                      Settings
                    </Text>
                  )}
                 icon = {({color , size})=>(
                    <Icon
                        type = "material-community"
                        name = "cog-outline"
                        color = {colors.buttons}
                        size = {size}
                    
                    />
                 )}
            />

               <DrawerItem 
                 label={() => (
                    <Text style={{ color: colors.buttons, fontSize: 16 }}>
                     Help
                    </Text>
                  )}
                 icon = {({color , size})=>(
                    <Icon
                        type = "material-community"
                        name = "lifebuoy"
                        color = {colors.buttons}
                        size = {size}
                    
                    />
                 )}
            />

            <View style = {{borderTopWidth:0.4 , borderTopColor:colors.buttons}}>
                 <Text style = {styles.preferences}>Preferences</Text>

                 <View style = {styles.switchText}>
                      <Text style = {styles.darkthemetext}>Dark Theme</Text>
                      <View style = {{paddingRight:10 , paddingTop:32}}>
                        <Switch 
                            trackColor={{false:colors.buttons , true:"#E11584"}}
                            thumbColor= "#E11584"
                        />
                      </View>
                 </View>
            </View>

            
            </DrawerContentScrollView>

            <DrawerItem 
                 label={() => (
                    <Text style={{ color: colors.buttons, fontSize: 16 }}>
                     Signout
                    </Text>
                  )}
                 icon = {({color , size})=>(
                    <Icon
                        type = "material-community"
                        name = "logout-variant"
                        color = {colors.buttons}
                        size = {size}
                    
                    />
                 )}
            />
        </View>
    )
}







const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },

    avatar: {
        borderWidth:4,
        borderColor:"#E11584",

    },

    preferences:{
        fontSize:18,
        color:colors.buttons,
        paddingTop:30,
        paddingLeft:20,
    },

    switchText:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10,
    },

    darkthemetext:{
        fontSize:17,
        color:colors.buttons,
        paddingTop:30,
        paddingLeft:0,
        fontWeight:'bold',
    }
})