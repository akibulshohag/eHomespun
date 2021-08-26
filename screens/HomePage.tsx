import * as React from 'react';
import { StyleSheet,Text, View, TextInput,Image,} from 'react-native';
import { Dimensions } from 'react-native';
import {  Entypo,FontAwesome5,Ionicons ,Fontisto,EvilIcons,AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useState} from "react";
import OtpInputs from 'react-native-otp-inputs';
import { StatusBar } from 'expo-status-bar';
import Footer from '../components/footer'
import Footer1 from '../components/Footer1'


const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height


// import Header from '../components/headerComponent';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { openDrawer } from 'react-navigation-drawer/lib/typescript/src/routers/DrawerActions';
export default function Mywallet() {


    const navigation = useNavigation(); 
    const [isOtpForm, setisOtpForm] = useState(false)


  return (
    <View style={{}} >
      <ScrollView>
        {/* Ehomespun and  search input */}
       <View style={{marginTop:40,flexDirection:'row',marginLeft:10}}>
                <TouchableOpacity style={{marginRight:10}}>
                   <Entypo onPress={()=>navigation.navigate('drawerContent')}style={{}} name='menu' color=''size={40}/>
                 </TouchableOpacity>
                 <View>
                   <Text style={{fontSize:25,fontStyle:'italic',fontWeight:'bold',color:'#73C1EA'}}>
                     eHomespun
                   </Text>
                   {/* <Image style={{width:deviceWidth/2,height:deviceHeight/20}} source={require('../assets/images/splash.png')}/> */}
                 </View>
        
       </View> 
       <View style={{borderColor:'#00000',borderWidth:1,width:deviceWidth/1.1,borderRadius:8,marginLeft:12,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput style={{padding:5,fontSize:15,color:'#959595'}}>Search Product</TextInput>
          <AntDesign style={{marginLeft:0}} name='search1' color='red'size={20}/>
        </View>
        <ScrollView >
          <View style={{marginTop:15}}>
            <Text style={{fontSize:18,marginLeft:10}}>Welcome To eHomespun</Text>
            <Text style={{fontSize:20,marginLeft:10,color:'#BFA99D',width:deviceWidth/1.6}}>a new home for everything handmade and more.</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('')} style={{marginTop:8,borderRadius:30,backgroundColor:'#032BFB',width:deviceWidth/2.5,alignItems:'center',justifyContent:'center',height:50,marginLeft:10}}>
                             
                             <Text style={{padding:8,color:'#fff',fontWeight:'bold',fontSize:16,}}>Become A Seller</Text>
               </TouchableOpacity>
          </View>

          <View style={{marginTop:10,marginLeft:10,}}>
            <Text style={{fontSize:25,fontWeight:'bold'}}>Featured Products</Text>
            <View style={{  marginTop: 10}}>
              <Image
                style={{
                  
                 width:deviceWidth/1.1+10,
                 height:deviceHeight/2.8                 }}
                 source={require('../assets/images/splash.png')}
                 />
             <Text style={{position: 'absolute', fontSize: 10}}>Dreamcatcher</Text>
             

           </View>
           <View style={{flexDirection:'row'}}>
           <View style={{  marginTop: 10}}>
              <Image
                style={{
                  
                 width:deviceWidth/2.2,
                 height:deviceHeight/4                 }}
                 source={require('../assets/images/splash.png')}
                 />
             <Text style={{position: 'absolute', fontSize: 10}}>Dreamcatcher</Text>
             

           </View>
           <View style={{  marginTop: 10,marginLeft:10}}>
              <Image
                style={{
                  
                 width:deviceWidth/2.2,
                 height:deviceHeight/4                 }}
                 source={require('../assets/images/splash.png')}
                 />
             <Text style={{position: 'absolute', fontSize: 10}}>Dreamcatcher</Text>
             

           </View>
           </View>
           <View style={{flexDirection:'row'}}>
           <View style={{  marginTop: 10}}>
              <Image
                style={{
                  
                 width:deviceWidth/2.2,
                 height:deviceHeight/4                 }}
                 source={require('../assets/images/splash.png')}
                 />
             <Text style={{position: 'absolute', fontSize: 10}}>Dreamcatcher</Text>
             

           </View>
           <View style={{  marginTop: 10,marginLeft:10}}>
              <Image
                style={{
                  
                 width:deviceWidth/2.2,
                 height:deviceHeight/4                 }}
                 source={require('../assets/images/splash.png')}
                 />
             <Text style={{position: 'absolute', fontSize: 10}}>Dreamcatcher</Text>
             

           </View>
           </View>
         </View>

         <View style={{marginTop:10,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
           <Text style={{fontSize:25,fontWeight:'bold'}}>Check Out Our Latest Deals</Text>
           <Text style={{width:deviceWidth/1.5}}>Who doesn't like a good deal? Browse tons of Sellers'awesome deals</Text>
         </View>

         <View style={{flexDirection:'row'}}>
         <Card style={{width:deviceWidth/2.2,height:deviceHeight/2.8,marginLeft:10,marginTop:20}}>
           <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'column'}}>
             <Image style={{width:deviceWidth/3,height:deviceHeight/7,marginTop:10}} source={require('../assets/images/splash.png')}/>
             <Text style={{marginTop:20,width:deviceWidth/3 }}>Secret Garden Journal</Text>
             <Text style={{marginTop:15,width:deviceWidth/3,fontSize:10 }}>Sort By: SaasyK Design</Text>
           </View>
           <View style={{borderTopWidth:1,marginTop:30,borderTopColor:'#CACDD1'}}>
             <Text style={{fontSize:20,color:'#F2566B',marginLeft:10}}>$30.00</Text>
           </View>
         </Card>
         <Card style={{width:deviceWidth/2.2,height:deviceHeight/2.8,marginLeft:10,marginTop:20}}>
           <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'column'}}>
             <Image style={{width:deviceWidth/3,height:deviceHeight/7,marginTop:10}} source={require('../assets/images/splash.png')}/>
             <Text style={{marginTop:20,width:deviceWidth/3 }}>Secret Garden Journal</Text>
             <Text style={{marginTop:15,width:deviceWidth/3,fontSize:10 }}>Sort By: SaasyK Design</Text>
           </View>
           <View style={{borderTopWidth:1,marginTop:30,borderTopColor:'#CACDD1'}}>
             <Text style={{fontSize:20,color:'#F2566B',marginLeft:10}}>$30.00</Text>
           </View>
         </Card>
         </View>

         <View style={{backgroundColor:'#E1B591',height:deviceHeight/5,marginTop:90,justifyContent:'center',alignItems:'center'}}>
           <Text style={{fontSize:28,color:'#F3F4FF',width:deviceWidth/1.8}}>LOOKING   FOR SOMETHING?</Text>
           <Text style={{fontSize:18,width:deviceWidth/1.3}}>BROWSE OUR CATEGORIES AND FIND PITS FOR THE INNER YOU</Text>
         </View>
          
          <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{fontSize:30}}>Choose Category</Text>
          </View>
          <View>
            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:20}}>
              <View style={{flexDirection:'row'}}>
                 <View style={{marginLeft:10,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold'}}>Apparel</Text>
                 <Text style={{width:deviceWidth/2}}>Baby and Toddler, Bottoms, Hats and Glasses, Purses and Bags, Shoes, Tops, Wallets</Text>
                 </View>
                 <View style={{justifyContent:'center'}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/11,marginTop:8,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
             </View>
            </Card>
            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:10}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{marginLeft:10,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold'}}>Arts and Crafts</Text>
                 <Text style={{width:deviceWidth/2}}>Craft Supplies, DIY Kits, Paintings, Photography, Prints and Transfers, Sewing and Knitting, Mixed Media, Assemblage </Text>
                 </View>
                 <View style={{justifyContent:'center'}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/11,marginTop:8,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
             </View>
            </Card>
            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:10}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{marginLeft:10,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold'}}>Furniture</Text>
                 <Text style={{width:deviceWidth/2}}>Bedroom, Dining, Living Area, Miscellaneous, Patio</Text>
                 </View>
                 <View style={{justifyContent:'center'}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/11,marginTop:8,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
             </View>
            </Card>
            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:10}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{marginLeft:10,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold'}}>Home Décor</Text>
                 <Text style={{width:deviceWidth/2}}>Wall Décor, Table Top Décor, Decorative Pillows and Bedding, Rugs and Curtains, Dining and Kitchen, Lawn and Patio, Seasonal Décor</Text>
                 </View>
                 <View style={{justifyContent:'center'}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/11,marginTop:8,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
             </View>
            </Card>
            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:10}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{marginLeft:10,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold'}}>Bar Accessories</Text>
                 <Text style={{width:deviceWidth/2}}></Text>
                 </View>
                 <View style={{justifyContent:'center'}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/11,marginTop:8,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
             </View>
            </Card>
            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:10}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{marginLeft:10,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold',width:deviceWidth/2}}>Beauty And Personal Care</Text>
                 <Text style={{width:deviceWidth/2}}></Text>
                 </View>
                 <View style={{justifyContent:'center'}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/11,marginTop:8,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
             </View>
            </Card>
            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:10}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{marginLeft:10,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold',width:deviceWidth/2}}>Books And magazines</Text>
                 <Text style={{width:deviceWidth/2}}></Text>
                 </View>
                 <View style={{justifyContent:'center'}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/11,marginTop:8,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
             </View>
            </Card>
            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:10}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{marginLeft:10,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold',width:deviceWidth/2}}>Candle And Waxes</Text>
                 <Text style={{width:deviceWidth/2}}></Text>
                 </View>
                 <View style={{justifyContent:'center'}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/11,marginTop:8,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
             </View>
            </Card>
            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:10}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{marginLeft:10,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold',width:deviceWidth/2}}>Cards And Invitation</Text>
                 <Text style={{width:deviceWidth/2}}></Text>
                 </View>
                 <View style={{justifyContent:'center'}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/11,marginTop:8,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
             </View>
            </Card>
            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:10}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{marginLeft:10,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold',width:deviceWidth/2}}>Jewelry</Text>
                 <Text style={{width:deviceWidth/2}}>Body Jewelry, Bracelets, Rings, Earrings, Necklaces</Text>
                 </View>
                 <View style={{justifyContent:'center'}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/11,marginTop:8,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
             </View>
            </Card>
            
          </View>

          <View style={{borderWidth:2.5,borderColor:'#032BFB',height:deviceHeight/1.5,width:deviceWidth/1.1,marginLeft:10,marginTop:50}}>
                 <View style={{flexDirection:'row',borderBottomWidth:1,marginLeft:10,marginRight:10,borderBottomColor:'#CACDD1'}}>
                   <View style={{justifyContent:'center'}}>
                     <Text style={{fontSize:15,color:'#54ABFC',padding:15}}>Deal Of Weak </Text>
                   </View>
                   <View style={{flexDirection:'row',justifyContent:'center',marginLeft:90,alignItems:'center'}}>
                      <EvilIcons style={{}} name='arrow-left' color='#1E1E1E'size={30}/>
                      <EvilIcons style={{}} name='arrow-right' color='#1E1E1E'size={30}/>
                   </View>
                 </View>
                 <View style={{alignItems:'center',justifyContent:'center',marginTop:15}}>
                   <Image style={{width:deviceWidth/2.5,height:deviceHeight/6,marginTop:8}} source={require('../assets/images/splash.png')}/>
                 </View>
                 <View style={{marginTop:30,alignItems:'center',justifyContent:'center'}}>
                   <Text style={{fontSize:30,fontWeight:'bold'}}>Poe Journal</Text>
                   <Text style={{marginTop:10,}}>Sold By: Akibul Islam</Text>
                   <Text style={{fontSize:30,color:'#53A217',marginTop:20}}>$30.00</Text>
                   <Text style={{marginTop:10,color:'red'}}>Hurry! Offers Ends Soon</Text>
                   <TouchableOpacity onPress={()=>navigation.navigate('')} style={{borderRadius:5,backgroundColor:'#FFCA00',width:deviceWidth/3,alignItems:'center',justifyContent:'center',height:40,marginTop:20}}>
                        <Text style={{padding:8,color:'#fff',fontWeight:'bold',fontSize:16}}>ADD TO CART</Text>
                   </TouchableOpacity>
                 </View>
                 

          </View>

          <View  style={{backgroundColor:'#021DD1',width:deviceWidth/1,alignItems:'center',justifyContent:'center',height:50,marginTop:50}}>
               <Text style={{padding:8,color:'#fff',fontWeight:'bold',fontSize:20}}>You Might Like</Text>
          </View>
          <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:10}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/9,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
                 <View style={{marginLeft:20,marginTop:7}}>
                   <Text style={{fontSize:10,color:'#CACDD1'}}>BABY AND TODDLER</Text>
                   <Text style={{fontSize:15,width:deviceWidth/2}}>Unicorn Subcatcher or wall decor</Text>
                   <Text style={{fontSize:20,fontWeight:'bold',color:'#4A9939'}}>$5.00</Text>
                   
                 </View>
             </View>
            </Card>
            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:1}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/9,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
                 <View style={{marginLeft:20,marginTop:7}}>
                   <Text style={{fontSize:10,color:'#CACDD1'}}>BABY AND TODDLER</Text>
                   <Text style={{fontSize:15,width:deviceWidth/2}}>Unicorn Subcatcher or wall decor</Text>
                   <Text style={{fontSize:20,fontWeight:'bold',color:'#4A9939'}}>$5.00</Text>
                   
                 </View>
             </View>
            </Card>

            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:1}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/9,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
                 <View style={{marginLeft:20,marginTop:7}}>
                   <Text style={{fontSize:10,color:'#CACDD1'}}>BABY AND TODDLER</Text>
                   <Text style={{fontSize:15,width:deviceWidth/2}}>Unicorn Subcatcher or wall decor</Text>
                   <Text style={{fontSize:20,fontWeight:'bold',color:'#4A9939'}}>$5.00</Text>
                   
                 </View>
             </View>
            </Card>

            <Card style={{width:deviceWidth/1.1,height:deviceHeight/7,marginLeft:10,marginTop:1}}>
            <View style={{flexDirection:'row'}}>
                 <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                 <Image style={{width:deviceWidth/4,height:deviceHeight/9,marginLeft:20}} source={require('../assets/images/splash.png')}/>
                 </View>
                 <View style={{marginLeft:20,marginTop:7}}>
                   <Text style={{fontSize:10,color:'#CACDD1'}}>BABY AND TODDLER</Text>
                   <Text style={{fontSize:15,width:deviceWidth/2}}>Unicorn Subcatcher or wall decor</Text>
                   <Text style={{fontSize:20,fontWeight:'bold',color:'#4A9939'}}>$5.00</Text>
                   
                 </View>
             </View>
            </Card>

            <View style={{marginTop:80,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:16,color:'#021DD4'}}>THE PATH TO RUNNING YOUR VERY OWN</Text>
              <Text style={{fontSize:16,color:'#021DD4'}}>STORE</Text>
              <Text style={{fontSize:35}}>How It Works</Text>
            </View>

          <View style={{marginTop:70,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:deviceWidth/2.8,height:deviceHeight/5.9,borderWidth:1,borderRadius:100,borderColor:'#EC6E0D'}}>
                 <View style={{marginTop:5,marginLeft:7,width:deviceWidth/3.2,height:deviceHeight/6.6,borderWidth:1,borderRadius:100,borderColor:'#EC6E0D',alignItems:'center',justifyContent:'center',backgroundColor:'#F28113'}}>
                 <FontAwesome5 style={{}} name='users' color='#F8F9F9'size={35}/>
                 </View>
            </View>
            <Text style={{fontSize:30}}>Create A Free Account</Text>
            <Text style={{fontSize:15,width:deviceWidth/1.6,textAlign:'center'}}>Create your free account and click 'become a seller'</Text>
          </View>

          <View style={{marginTop:70,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:deviceWidth/2.8,height:deviceHeight/5.9,borderWidth:1,borderRadius:100,borderColor:'#EC6E0D'}}>
                 <View style={{marginTop:5,marginLeft:7,width:deviceWidth/3.2,height:deviceHeight/6.6,borderWidth:1,borderRadius:100,borderColor:'#910EB3',alignItems:'center',justifyContent:'center',backgroundColor:'#910EB3'}}>
                 <FontAwesome5 style={{}} name='users' color='#F8F9F9'size={35}/>
                 </View>
            </View>
            <Text style={{fontSize:30,width:deviceWidth/1.2,textAlign:'center'}}>Pick A Seller Membership Plan</Text>
            <Text style={{fontSize:15,width:deviceWidth/1.6,textAlign:'center'}}>Create your free account and click 'become a seller'</Text>
          </View>

          <View style={{marginTop:70,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:deviceWidth/2.8,height:deviceHeight/5.9,borderWidth:1,borderRadius:100,borderColor:'#EC6E0D'}}>
                 <View style={{marginTop:5,marginLeft:7,width:deviceWidth/3.2,height:deviceHeight/6.6,borderWidth:1,borderRadius:100,borderColor:'#EC6E0D',alignItems:'center',justifyContent:'center',backgroundColor:'#063EB2'}}>
                 <FontAwesome5 style={{}} name='users' color='#F8F9F9'size={35}/>
                 </View>
            </View>
            <Text style={{fontSize:30,width:deviceWidth/1.2,textAlign:'center'}}>Customize Your Shop and Add Products</Text>
            <Text style={{fontSize:15,width:deviceWidth/1.6,textAlign:'center'}}>Create your free account and click 'become a seller'</Text>
          </View>

          <View style={{marginTop:70,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:deviceWidth/2.8,height:deviceHeight/5.9,borderWidth:1,borderRadius:100,borderColor:'#EC6E0D'}}>
                 <View style={{marginTop:5,marginLeft:7,width:deviceWidth/3.2,height:deviceHeight/6.6,borderWidth:1,borderRadius:100,borderColor:'#EC6E0D',alignItems:'center',justifyContent:'center',backgroundColor:'#27DDD3'}}>
                 <FontAwesome5 style={{}} name='users' color='#F8F9F9'size={35}/>
                 </View>
            </View>
            <Text style={{fontSize:30}}>Start Selling</Text>
            <Text style={{fontSize:15,width:deviceWidth/1.6,textAlign:'center'}}>Create your free account and click 'become a seller'</Text>
          </View>

           <View style={{marginLeft:10,marginTop:100}}>     
            <View style={{marginLeft:5}}>
              <Text style={{fontSize:15}}>Share This:</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:5}}>
              <Entypo style={{}} name='twitter-with-circle' color='#00ACEE'size={35}/>
              <Entypo style={{marginLeft:5}} name='facebook-with-circle' color='#1877F2'size={35}/>
              <Entypo style={{marginLeft:5}} name='pinterest-with-circle' color='#CA1F27'size={35}/>
            </View>
          </View> 

          <View style={{marginLeft:10,marginTop:30}}>     
            <View style={{marginLeft:5}}>
              <Text style={{fontSize:15}}>Like This:</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:5.,marginLeft:5}}>
              <AntDesign style={{}} name='like1' color='#1877F2'size={35}/>
              </View>
              <Text style={{color:'#C3C3C3',marginLeft:4}}>Be the first to like this</Text>
          </View>
         <Footer1/>
         


        </ScrollView>
        </ScrollView>

      
         
           <Footer/>
         
      
    </View>
       
    
    

          
  );
}

const styles = StyleSheet.create({
 card:{
   borderRadius:35,
   } 
 
});
