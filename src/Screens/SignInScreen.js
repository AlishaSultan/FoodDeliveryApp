import React , {useState,useRef} from 'react';
import {View, Text, StyleSheet,TextInput} from 'react-native';
import {colors, parameters , title} from '../Global/styles';
import Header from '../Components/Header';
import {Icon,Button,SocialIcon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import DrawerNavigator from '../navigation/DrawerNavigator';
import RootClientTab from '../navigation/ClientTab';
export default function SignInScreen({navigation}) {

    const[textInput2F , settextInput2F] = useState(false)

    const textinput1 = useRef(1)
    const textinput2 = useRef(2)


    return (
        <>
        <View style={styles.container}>
            <Header title = "MY ACCOUNT" type = "arrow-left" navigation = {navigation}/>
        

        <View>
            <Text style={title}>Sign-In</Text>
        </View>
                
        <View style = {
            {
                marginTop: 12,
                alignItems: 'center',
            }
        } >
                    <Text style = {styles.text1}>Please Enter the Email and Password</Text>
                    <Text style = {styles.text1}>registered with your account </Text>
        </View>

        <View>
           <View style = {{marginTop:30}}>
              <TextInput 
                 style = {styles.TextInput1}
                 placeholder='Email'
                 ref = {textinput2}
              />
           </View>
           <View style = {styles.TextInput2}>
           <Animatable.View animation = {textInput2F?"":"fadeInRight"} duration = {400}>
              <Icon 
                 name = "lock"
                 iconStyle = {{color:colors.buttons}}
                 type = "material"
              />
           </Animatable.View>
            
           <TextInput 
                style = {{width:"80%"}}
                 placeholder='Password'
                 ref = {textinput2}
                 onFocus ={()=>{
                    settextInput2F(false)
                 }}

                 onBlur ={()=>{
                    settextInput2F(true)
                 }
                }
              />

           <Animatable.View animation = {textInput2F?"":"fadeInLeft"} duration = {400}>
           <Icon 
                 name = "visibility-off"
                 iconStyle = {{color:colors.buttons}}
                 type = "material"
                 style = {{marginRight:14}}
              />
           </Animatable.View>
           </View>

        </View>

        <View style = {{marginHorizontal:20 , marginVertical:20}}>
           <Button 
             title = "SIGN IN"
             buttonStyle = {parameters.styledButton}
             titleStyle = {parameters.buttonTitle}

             onPress={() => {
                navigation.navigate('DrawerNavigator');
              }}
              
            
            
           
           />
        </View>

        <View style = {{alignItems:"center" , marginTop:20}}>
            <Text style = {styles.forgot}>Forgot Password?</Text>
        </View>

        <View style = {{alignItems:"center",marginTop:30}}>
            <Text style = {{fontSize:22 , fontWeight:'bold' , color:"#FF69B4"}}>OR</Text>
        </View>

        <View style = {{marginHorizontal:15 , marginVertical:30}}>
        
          <SocialIcon
              title = "Sign In with Facebook"
              button
              type = 'facebook'
              style = {styles.SocialIcon}
              onPress={()=>{

              }}

          
          />
           
        
        </View>

        <View style = {{marginHorizontal:15 , marginTop:-20}}>
        
          <SocialIcon
              title = "Sign In with Google"
              button
              type = 'google'
              style = {styles.SocialIcon}
              onPress={()=>{

              }}

          
          />
           
        
        </View>

        <View style = {{marginLeft:30,marginTop:30}}>
            <Text style = {{color:"#F9629F",fontSize:18,}}>New on XFood?</Text>
        </View>

        <View style = {{alignItems:"flex-end" , marginHorizontal:20}}>
            <Button
            title="Create an Account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            />
            
        </View>

    </View>

    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    
    text1: {
        color:"#FF69B4",
        fontSize: 14,
        fontWeight:'bold',
    },

    TextInput1: {
        borderWidth:1,
        borderColor:"#F9629F",
        marginHorizontal:20,

        borderRadius:12,
        marginBottom:20,

        paddingLeft:15,

        
    },

    TextInput2:{
        borderWidth:1,
        borderRadius:12,

        marginHorizontal:20,
        borderColor:"#F9629F",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:15,
        

    },

    forgot:{
        color:"#FF69B4",
        textDecorationLine:"underline",

        fontWeight:"bold",

        fontSize:17,

        

    },

    SocialIcon:{
        borderRadius:12,
        height:55
    },

    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        alignItems:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.buttons,
        height:45,

        paddingHorizontal:20,
        
        
    },

    createButtonTitle:{
        color:"#F9629F",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"-3",
    }


})

