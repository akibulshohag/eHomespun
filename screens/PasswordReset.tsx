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

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
import Footer from '../components/footer'
import Footer1 from '../components/Footer1'

// import Header from '../components/headerComponent';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { openDrawer } from 'react-navigation-drawer/lib/typescript/src/routers/DrawerActions';
export default function Mywallet() {


    const navigation = useNavigation(); 
    const [isOtpForm, setisOtpForm] = useState(false)


  return (
    <View>
    <ScrollView style={{backgroundColor:'#EFE7DC'}} >
      
         <View style={{marginTop:40}}>
            <Text style={{fontSize:30,marginLeft:15,fontWeight:'bold'}}>Lost Password</Text>
            <Text style={{fontSize:16,marginLeft:15,textAlign:'justify',width:deviceWidth/1.1}}>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</Text>
            <Text style={{fontSize:20,marginLeft:15,marginTop:20}}>Username or email</Text>
          </View>
          <View style={{borderColor:'#00000',borderWidth:1,width:deviceWidth/1.1,borderRadius:8,marginLeft:12,flexDirection:'row',alignItems:'center',backgroundColor:'#FFFFFF'}}>
          <TextInput style={{padding:5,fontSize:15,color:'#959595'}}>Email</TextInput>
          
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('')} style={{marginTop:8,borderRadius:5,backgroundColor:'#FFB200',width:deviceWidth/2,alignItems:'center',justifyContent:'center',height:50,marginLeft:10}}>
                             
             <Text style={{padding:8,fontWeight:'bold',fontSize:16,color:'#1E1E1E'}}>RESET PASSWORD</Text>
                             
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>navigation.navigate('')} style={{marginTop:8,marginLeft:5}}>
                             
             <Text style={{padding:8,fontWeight:'bold',fontSize:16,color:'#519BCC'}}>Delete Account</Text>
                             
         </TouchableOpacity>
      <Footer1/>
    </ScrollView>
    <Footer/>
    </View>
    

          
  );
}

const styles = StyleSheet.create({
 card:{
   borderRadius:35,
   width:70,
   height:70,
   backgroundColor:'#FFFFFF',
   marginTop:60,
   alignItems:'center'} 
 
});
