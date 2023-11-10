import React,{useState,useRef} from 'react';
import {View, Text, StyleSheet,TextInput,Image} from 'react-native';
import {colors,parameters,title} from '../Global/styles';
import {Icon,Button,SocialIcon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import SignInScreen from './SignInScreen';
export default function SignWelcomeScreen({navigation}) {
    return(

    <View style = {{flex:1}}>
        <View style = {{flex:3 , justifyContent:'flex-start',alignItems:'center',paddingTop:35}}>

          <Text style={{fontSize:26 , color:"#FF69B4" , fontWeight:'bold'}}>DISCOVER RESTAURANTS </Text>
          <Text style={{fontSize:26 , color:"#FF69B4" , fontWeight:'bold'}}>IN YOUR AREA</Text>
        </View>

        <View style = {{flex:4 , justifyContent:"center"}}>
           <Swiper autoplay = {true}>
            <View style = {styles.slide1}>
                <Image
                source = {{uri:"https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg&ga=GA1.1.1070187672.1697733754&semt=sph"}}
                style = {{height:"100%" , width:"100%"}}
                />
            </View>

            <View style = {styles.slide2}>
                <Image
                source = {{uri:"https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?w=1480&t=st=1697735571~exp=1697736171~hmac=183eaeae2b6b116b7f00a3ac17faf0c4eb5b483e183d4ca8fdf5c07596aca9ea"}}
                style = {{height:"100%" , width:"100%"}}
                />
            </View>

            <View style = {styles.slide3}>
                <Image
                source = {{uri:"https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?w=1480&t=st=1697735698~exp=1697736298~hmac=f339452166149c6276adb2b07b2c0fd48897e6cf00ae9756bbf75f1af973216b"}}
                style = {{height:"100%" , width:"100%"}}
                />
            </View>

            <View style = {styles.slide4}>
                <Image
                source = {{uri:"https://img.freepik.com/free-photo/side-view-fried-meat-with-french-fries-ketchup_141793-4908.jpg?w=1380&t=st=1697735763~exp=1697736363~hmac=7458fb37062524028ca9e18189deae254d0ae80fc53c215ebf7f65f1ed35927d"}}
                style = {{height:"100%" , width:"100%"}}
                />
            </View>

            <View style = {styles.slide5}>
                <Image
                source = {{uri:"https://img.freepik.com/free-photo/kebab-set-with-various-meat-pieces-lemon-slices_140725-3431.jpg?w=996&t=st=1697735831~exp=1697736431~hmac=247d24a96376b4bbd05991dc372cbf02c6f9cb91bd67764a8af9bdef2b496d3f"}}
                style = {{height:"100%" , width:"100%"}}
                />
            </View>
            
           </Swiper>
        </View>
        <View style = {{flex:4}}>
            
        <View style = {{marginHorizontal:40 , marginVertical:80}}>
           <Button 
             title = "SIGN IN"
             buttonStyle = {parameters.styledButton}
             titleStyle = {parameters.buttonTitle}
             onPress={()=>{
                 navigation.navigate("SignInScreen")
             }}/>
           
           
        </View>

        <View style = {{marginTop:-55, marginHorizontal:40}}>
            <Button
            title="Create an Account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            />
            
        </View>

        </View>
    </View>
    )
}

const styles = StyleSheet.create({
   
    slide1: {
        flex:1,
        justifyContent:"center",

        alignItems:"center",
        backgroundColor:'white'
    },

    slide2: {
        flex:1,

        alignItems:"center",

        justifyContent:"center",
        backgroundColor:'white'
    },

    slide3: {
        flex:1,

        alignItems:"center",

        justifyContent:"center",
        backgroundColor:'white'
    },

    slide4: {
        flex:1,

        alignItems:"center",

        justifyContent:"center",
        backgroundColor:'white'
    },

    slide5: {
        flex:1,

        alignItems:"center",

        justifyContent:"center",
        backgroundColor:'white'
    },

    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        alignItems:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.buttons,
        height:55,
        
        
    },

    createButtonTitle:{
        color:"#F9629F",
        fontSize:19,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"-3",
    }
})