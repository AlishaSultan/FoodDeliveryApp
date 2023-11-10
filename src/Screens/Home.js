import React , {useState} from 'react'
import {View , Text , StyleSheet,TouchableOpacity,ScrollView,FlatList,Pressable,Image, Dimensions} from 'react-native'
import {Icon} from 'react-native-elements';
import Homeheader from '../Components/Homeheader';
import {colors , parameters} from '../Global/styles';
import {filterData,restaurantData} from "../Global/Data";
import FoodCard from '../Components/FoodCard';
import Countdown from 'react-native-countdown-component';
const SCREEN_WIDTH = Dimensions.get('window').width
export default function Home({navigation}) {
    const [delivery , setDelivery] = useState(true)
    const [indexCheck , setIndexCheck] = useState("0")
    return(
        <View style={styles.container}>
            <Homeheader />
        <ScrollView
           stickyHeaderIndices={[0]}
           showsVerticalScrollIndicator = {true}
        
        >
          <View style = {{backgroundColor:"#ffa6c9", paddingBottom:5}}>
            <View style = {{marginTop:20,flexDirection:'row' , justifyContent:'space-evenly'}}>
                <TouchableOpacity
                    onPress = {()=>{
                          setDelivery(true)
                    }}
                >

                    <View style = {{...styles.deliveryButton,backgroundColor:delivery?color="#E11584":color = colors.buttons}}>
                        <Text style = {styles.deliveryText}>Delivery</Text>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress = {()=>{
                    setDelivery(false)
                    navigation.navigate("MapScreen")
              }}
                >

                    <View style = {{...styles.deliveryButton,backgroundColor:delivery?color = colors.buttons:color = "#E11584"}}>
                        <Text style = {styles.deliveryText}>Pick-Up</Text>
                    
                    </View>
                </TouchableOpacity>
            </View>
            </View>

            <View style = {styles.main}>
            <View style = {{flexDirection:"row" , marginTop:30 , backgroundColor:"#E11584" , borderRadius:15 , paddingVertical:10}}>
                <View style ={{flexDirection:"row" , alignItems:"center" , marginLeft:15}}>
                    <Icon 
                       type = "material-community"
                       name = "map-marker"
                       color = {colors.buttons}
                       size = {28}
                    />

                    <Text style = {{marginLeft:5 , color:"white"}}>22 Bessie Street</Text>
                    </View>

                <View style ={{flexDirection:"row" , alignItems:"center",marginLeft:12 , backgroundColor:colors.buttons , borderRadius:20}}>
                    <Icon 
                       type = "material-community"
                       name = "clock"
                       color = "white"
                       size = {26}
                    />

                    <Text style = {{marginLeft:5 ,color:"white"}}>We Deliver on Time...</Text>
               </View>
            </View>
            <View style = {{marginTop:32}}>

                   <Icon 
                       type = "material-community"
                       name = "tune"
                       color = {colors.buttons}
                       size = {35}
                    />

            </View>
            </View>

            <View style = {styles.cate}>
                <Text style = {{ color:"#F9629F",fontSize:22,fontWeight:"bold"}}>Categories</Text>
            </View>

            <View>
                  <FlatList
                  horizontal = {true}
                  showsHorizontalScrollIndicator = {false}
                     data = {filterData} 
                     keyExtractor={(item)=>item.id}
                     extraData ={indexCheck}
                     renderItem={({item,index})=>(
                        <Pressable
                          onPress = {()=>{
                            setIndexCheck(item.id)
                          }}>
                            <View style = {indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                                  <Image
                                  style = {{height:60 , width:60, borderRadius:50}}
                                  source = {item.image}
                                  />
                                  <View>
                                    <Text style = {indexCheck === item.id ? {...styles.smallCardTextSelected}:{...styles.smallCardText}}>{item.name}</Text>
                                  </View>
                            </View>
                        </Pressable>

                     )}
                  />
                  <View>
                  <View style = {styles.cate}>
                <Text style = {{ color:"#F9629F",fontSize:22,fontWeight:"bold"}}>Free Delivery Now</Text>
            </View>
                  </View>
            </View>
                 
                 
                 
                
            <View>
                <View style = {{flexDirection:'row'}}>
                      <Text style = {{color:"#F9629F",marginLeft:20 , fontSize:18,marginTop:15}}>Options changing in</Text>
                      <Countdown style = {{color:"#F9629F"}}
                           until = {133260}
                           size = {14}
                           digitStyle={{backgroundColor:"#E11584",marginTop:10,marginLeft:8}}
                           digitTxtStyle={{color:"white"}}
                           
                         />

                      
                </View>
            <FlatList 
                    style = {{marginTop:10 , marginBottom:10}}
                    horizontal = {true}
                    data = {restaurantData}
                    keyExtractor={(item , index)=>index.toString()}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item})=>(
                        <View style = {{marginRight:5}}>
                            <FoodCard
                               screenWidth = {SCREEN_WIDTH*0.8}
                               images = {item.images}
                               restaurantName={item.restaurantName}
                               farAway={item.farAway}
                               businessAddress={item.businessAddress}
                               averageReview={item.averageReview}
                               numberofReview={item.numberofReview}

                            />
                        </View>
                        
                    )}
                    />

<View>
                  <View style = {styles.cate}>
                <Text style = {{ color:"#F9629F",fontSize:22,fontWeight:"bold"}}>Promotion Available</Text>
            </View>
                  </View>
            </View>
                 
                 
                 
                
            <View>
            <FlatList 
                    style = {{marginTop:10 , marginBottom:10}}
                    horizontal = {true}
                    data = {restaurantData}
                    keyExtractor={(item , index)=>index.toString()}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item})=>(
                        <View style = {{marginRight:5}}>
                            <FoodCard
                               screenWidth = {SCREEN_WIDTH*0.8}
                               images = {item.images}
                               restaurantName={item.restaurantName}
                               farAway={item.farAway}
                               businessAddress={item.businessAddress}
                               averageReview={item.averageReview}
                               numberofReview={item.numberofReview}

                            />
                        </View>
                        
                    )}
                    />
            </View>
            <View>
            
            </View>

            <View style = {styles.cate}>
                <Text style = {{ color:"#F9629F",fontSize:22,fontWeight:"bold"}}>Restaurant in your Area</Text>
            </View>

            <View style = {{width:SCREEN_WIDTH,paddingTop:10}}>
               {
        
                 restaurantData.map(item =>(
                     <View key = {item.id} style = {{paddingBottom:20}}>
                         
                         <FoodCard
                               screenWidth = {SCREEN_WIDTH*0.95}
                               images = {item.images}
                               restaurantName={item.restaurantName}
                               farAway={item.farAway}
                               businessAddress={item.businessAddress}
                               averageReview={item.averageReview}
                               numberofReview={item.numberofReview}

                            />
                        
                    </View>

                 ))
               }
                 
            </View>
        </ScrollView>
{delivery &&
        <View style = {styles.floatButton}>
            <TouchableOpacity
               onPress={()=>{
                navigation.navigate("MapScreen")
               }}
            >
                <Icon
                  name = "place"
                  type = "material"
                  size = {32}
                  color = {"#E11584"}
                
                />

                <Text style = {{color:"#F9629F" , textAlign:"center"}}>Map</Text>
            </TouchableOpacity>
        </View>
}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },

    deliveryButton:{
        paddingHorizontal:20 , borderRadius:15,paddingVertical:5,
    },

    deliveryText:{
        marginLeft:5,
        fontSize:18,

        color:"white"

    },

     main:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:20
    },

    cate:{
        marginTop:20,
        marginHorizontal:20,
    },

    smallCard: {
        borderRadius:30,
        backgroundColor:colors.cardbackground,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:100,
        margin:10,
        height:100,

    },

    smallCardSelected: {
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:100,
        margin:10,
        height:100,

 
    },

    smallCardTextSelected:{
        fontWeight:"bold",
        color:"white",
    },
    smallCardText:{
        fontWeight:"bold",
        color:"#F9629F",
    },

    floatButton:{
        position:'absolute',
        bottom:10 , right:15,
        backgroundColor:'white',
        elevation:10,
        width:60, height:60,
        borderRadius:30,
        alignItems:'center'
    }
})