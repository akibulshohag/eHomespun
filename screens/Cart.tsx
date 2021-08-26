import * as React from 'react';
import { StyleSheet,Text, View, TextInput,Image,} from 'react-native';
import { Dimensions } from 'react-native';
import {  Entypo,FontAwesome,Ionicons ,Fontisto,Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useState} from "react";
import OtpInputs from 'react-native-otp-inputs';
import { StatusBar } from 'expo-status-bar';
import Footer from '../components/footer'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height


// import Header from '../components/headerComponent';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { openDrawer } from 'react-navigation-drawer/lib/typescript/src/routers/DrawerActions';
export default function Mywallet() {


    const navigation = useNavigation(); 
    const [isOtpForm, setisOtpForm] = useState(false)


  return (
    <ScrollView style={{}} >

          <View style={{justifyContent:'center',alignItems:'center'}}>
               <Image style={{width:'100%',height:deviceHeight/3}}  source={require('../assets/images/splash.png')}/>
          </View>
          <Card style={{width:deviceWidth/1.1,marginLeft:12,marginTop:20,height:deviceHeight/.7}}>
            <View style={{marginTop:30,alignItems:'center'}}>

               <Image style={{width:deviceWidth/3,height:deviceHeight/5.5}} source={require('../assets/images/splash.png')}/>
            </View>
            <View style={{flexDirection:'row',marginTop:10,borderTopColor:'#CACDD1',borderTopWidth:1,justifyContent:'space-between',alignItems:'center',marginLeft:10,marginRight:10}}>
                 <Text>Product</Text>
                 <View style={{marginRight:10,}}>
                      <Text style={{width:deviceWidth/2.5,color:'#54AEFD'}}>Love me I am me again Bracelate</Text>
                      <Text style={{color:'#A8A8A8'}}>Sold By:</Text>
                      <Text style={{color:'#7A8FFD'}}>Just simply K design</Text>
                 </View>
                 </View>
                 <View style={{flexDirection:'row',marginTop:20,borderTopColor:'#CACDD1',borderTopWidth:1,justifyContent:'space-between',alignItems:'center',marginLeft:10,marginRight:10}}>
                      <Text style={{marginTop:10}}>Price</Text>
                      <Text style={{marginTop:10}}>$19.99</Text>
                 </View>
                 <View style={{flexDirection:'row',marginTop:20,borderTopColor:'#CACDD1',borderTopWidth:1,justifyContent:'space-between',alignItems:'center',marginLeft:10,marginRight:10}}>
                      <Text>Quntity</Text>
                      <View style={{borderColor:'#CACDD1',borderWidth:1,width:deviceWidth/7,borderRadius:5,alignItems:'center',marginTop:10}}>
                         <TextInput style={{padding:5,fontSize:15,color:'#959595'}}>1</TextInput>
                      </View>
                 </View>
                 <View style={{flexDirection:'row',marginTop:20,borderTopColor:'#CACDD1',borderTopWidth:1,justifyContent:'space-between',alignItems:'center',marginLeft:10,marginRight:10}}>
                      <Text>Subtotal</Text>
                      <Text>$19.99</Text>
                 </View>
                 <View style={{borderColor:'#CACDD1',borderWidth:1,width:deviceWidth/1.2,borderRadius:8,marginLeft:10,marginTop:20}}>
                         <TextInput style={{padding:5,fontSize:15,color:'#959595'}}>Coupon Code</TextInput>
                 </View>
                 <TouchableOpacity onPress={()=>navigation.navigate('')} style={{marginTop:15,borderRadius:5,backgroundColor:'#F1F1F1',width:deviceWidth/1.2,alignItems:'center',justifyContent:'center',height:50,marginLeft:10}}>
                             
                             <Text style={{padding:8,color:'#1E1E1E',fontWeight:'bold',fontSize:16,}}>Apply Coupon</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate('')} style={{marginTop:15,borderRadius:5,backgroundColor:'#FFCA00',width:deviceWidth/1.2,alignItems:'center',justifyContent:'center',height:50,marginLeft:10}}>
                             
                             <Text style={{padding:8,color:'#1E1E1E',fontWeight:'bold',fontSize:16,}}>Update Cart</Text>
               </TouchableOpacity>

               <View style={{borderColor:'#CACDD1',borderWidth:1.5,width:deviceWidth/1.2,marginLeft:10,marginTop:35,height:deviceHeight/2}}>
                    <View style={{marginTop:10,marginLeft:10}}>
                         <Text style={{fontSize:20,fontWeight:'bold'}}>Cart Totals</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between',alignItems:'center',marginLeft:10,marginRight:10}}>
                      <Text>Subtotal</Text>
                      <Text style={{marginLeft:5}}>$19.99</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:20,borderTopColor:'#CACDD1',borderTopWidth:1,justifyContent:'space-between',alignItems:'center',marginLeft:10,marginRight:10}}>
                      <Text style={{width:deviceWidth/3.8}}>Just simply K design shipping</Text>
                     <View style={{marginRight:10,marginTop:10}}>
                       <Text style={{width:deviceWidth/2.5,color:'#1E1E1E'}}>Enter your address to view shipping options. </Text>
                       <Text style={{color:'#54AEFD',width:deviceWidth/4}}>CalCulate Shipping</Text>

                     </View>
                    </View>
                    <View style={{borderTopColor:'#CACDD1',borderTopWidth:1,flexDirection:'row',marginTop:20,justifyContent:'space-between',alignItems:'center',marginLeft:10,marginRight:10}}>
                      <Text style={{marginTop:10}}>Tax</Text>
                      <Text style={{marginLeft:5,marginTop:10}}>$19.99</Text>
                    </View>
                    <View style={{borderTopColor:'#CACDD1',borderTopWidth:1,flexDirection:'row',marginTop:20,justifyContent:'space-between',alignItems:'center',marginLeft:10,marginRight:10}}>
                      <Text style={{marginTop:10}}>Total</Text>
                      <Text style={{marginLeft:5,marginTop:10}}>$19.99</Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('')} style={{marginTop:25,borderRadius:5,backgroundColor:'#FFCA00',width:deviceWidth/1.4,alignItems:'center',justifyContent:'center',height:50,marginLeft:15}}>
                             
                             <Text style={{padding:8,color:'#1E1E1E',fontWeight:'bold',fontSize:20,}}>PROCCED TO CHECOUT</Text>
                    </TouchableOpacity>
               </View>
            
          </Card>
          <View style={{marginTop:60}}></View>
      
         <View>
              <Footer/>
         </View>
    </ScrollView>
    

          
  );
}

const styles = StyleSheet.create({
 card:{
   borderRadius:35,
  
} 
 
});
