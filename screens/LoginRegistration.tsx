import * as React from 'react';
import { StyleSheet,Text, View, TextInput,Image,} from 'react-native';
import { Dimensions } from 'react-native';
import {  Entypo,FontAwesome,Ionicons ,Fontisto,Feather,MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useState} from "react";
import OtpInputs from 'react-native-otp-inputs';
import { StatusBar } from 'expo-status-bar';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height


// import Header from '../components/headerComponent';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { openDrawer } from 'react-navigation-drawer/lib/typescript/src/routers/DrawerActions';
export default function Mywallet() {


    const navigation = useNavigation(); 
    const [isOtpForm, setisOtpForm] = useState(false)
    const [view, setview] = useState(false)
    const [apply, setapply] = useState(false)
    const [read, setread] = useState(false)
    const [subscribe, setsubscribe] = useState(false)


  return (
    <ScrollView style={{}} >
        
        <View style={{marginTop:40}}>
          <Text style={{fontSize:30,marginLeft:15,fontWeight:'bold'}}>Login</Text>
        </View>
         <View>
          <Text style={{fontSize:15,marginLeft:15,marginTop:20}}>Username or email Address:<Text style={{color:'red'}}>*</Text></Text>
          <View style={{borderColor:'#00000',borderWidth:1,width:deviceWidth/1.1,borderRadius:8,marginLeft:12,flexDirection:'row',alignItems:'center',backgroundColor:'#FFFFFF'}}>
          <TextInput style={{padding:5,fontSize:15,color:'#959595'}}>Email</TextInput>
          </View>
         </View>
         <View>
          <Text style={{fontSize:15,marginLeft:15,marginTop:20}}>Password:<Text style={{color:'red'}}>*</Text></Text>
          <View style={{borderColor:'#00000',borderWidth:1,width:deviceWidth/1.1,borderRadius:8,marginLeft:12,flexDirection:'row',alignItems:'center',backgroundColor:'#FFFFFF'}}>
          <TextInput style={{padding:5,fontSize:15,color:'#959595'}}>Password</TextInput>
          </View>
         </View>
         <View style={{marginLeft:10,marginTop:20}}>
                <TouchableOpacity onPress={()=>view? setview(false):setview(true)} style={{flexDirection:'row',alignItems:'center',}}>
                        {view?
                        <MaterialCommunityIcons name='checkbox-marked' color='#005CC8'size={25}/>
                        :
                        <MaterialCommunityIcons name='checkbox-blank-outline' color='#1E1E1E'size={25}/>
                        }
                        <Text style={{fontSize:15,marginLeft:10}}>Remember Me</Text>
                </TouchableOpacity>
         </View>
         <TouchableOpacity onPress={()=>navigation.navigate('')} style={{marginTop:8,borderRadius:5,backgroundColor:'#FFB200',width:deviceWidth/3,alignItems:'center',justifyContent:'center',height:50,marginLeft:10}}>
                             
             <Text style={{padding:8,fontWeight:'bold',fontSize:16,color:'#1E1E1E'}}>LOG IN</Text>
                             
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>navigation.navigate('')} style={{marginTop:8,marginLeft:5}}>
                             
             <Text style={{padding:8,fontWeight:'bold',fontSize:16,color:'#519BCC'}}>Lost Your password</Text>
                             
         </TouchableOpacity>
         <View style={{marginTop:40}}>
          <Text style={{fontSize:30,marginLeft:15,fontWeight:'bold'}}>Register</Text>
        </View>
         <View>
          <Text style={{fontSize:15,marginLeft:15,marginTop:20}}>Username:<Text style={{color:'red'}}>*</Text></Text>
          <View style={{borderColor:'#00000',borderWidth:1,width:deviceWidth/1.1,borderRadius:8,marginLeft:12,flexDirection:'row',alignItems:'center',backgroundColor:'#FFFFFF'}}>
          <TextInput style={{padding:5,fontSize:15,color:'#959595'}}>Username</TextInput>
          </View>
         </View>
         <View>
          <Text style={{fontSize:15,marginLeft:15,marginTop:20}}>Email Address:<Text style={{color:'red'}}>*</Text></Text>
          <View style={{borderColor:'#00000',borderWidth:1,width:deviceWidth/1.1,borderRadius:8,marginLeft:12,flexDirection:'row',alignItems:'center',backgroundColor:'#FFFFFF'}}>
          <TextInput style={{padding:5,fontSize:15,color:'#959595'}}>Email Address</TextInput>
          </View>
         </View>
         <View>
          <Text style={{fontSize:15,marginLeft:15,marginTop:20}}>Password:<Text style={{color:'red'}}>*</Text></Text>
          <View style={{borderColor:'#00000',borderWidth:1,width:deviceWidth/1.1,borderRadius:8,marginLeft:12,flexDirection:'row',alignItems:'center',backgroundColor:'#FFFFFF'}}>
          <TextInput style={{padding:5,fontSize:15,color:'#959595'}}>Password</TextInput>
          </View>
         </View>
         <View style={{marginLeft:10,marginTop:20}}>
                <TouchableOpacity onPress={()=>apply? setapply(false):setapply(true)} style={{flexDirection:'row',alignItems:'center',}}>
                        {apply?
                        <MaterialCommunityIcons name='checkbox-marked' color='#005CC8'size={25}/>
                        :
                        <MaterialCommunityIcons name='checkbox-blank-outline' color='#1E1E1E'size={25}/>
                        }
                        <Text style={{fontSize:15,marginLeft:10}}>Apply to become a seller</Text>
                </TouchableOpacity>
         </View>
         <View style={{marginLeft:10,marginTop:20}}>
                <TouchableOpacity onPress={()=>read? setread(false):setread(true)} style={{flexDirection:'row'}}>
                        {read?
                        <MaterialCommunityIcons name='checkbox-marked' color='#005CC8'size={25}/>
                        :
                        <MaterialCommunityIcons name='checkbox-blank-outline' color='#1E1E1E'size={25}/>
                        }
                        <Text style={{fontSize:15,marginLeft:10,width:deviceWidth/1.3}}>I have read and accepted the <Text style={{color:'#519BCC'}}> terms and conditions.</Text></Text>
                </TouchableOpacity>
         </View>
         <View style={{marginLeft:10,marginTop:20}}>
                <TouchableOpacity onPress={()=>subscribe? setsubscribe(false):setsubscribe(true)} style={{flexDirection:'row',alignItems:'center',}}>
                        {subscribe?
                        <MaterialCommunityIcons name='checkbox-marked' color='#005CC8'size={25}/>
                        :
                        <MaterialCommunityIcons name='checkbox-blank-outline' color='#1E1E1E'size={25}/>
                        }
                        <Text style={{fontSize:15,marginLeft:10,width:deviceWidth/1.3}}>Subscribe to our newsletter</Text>
                </TouchableOpacity>
         </View>
         <View style={{marginTop:20,marginLeft:10}}>
           <Text style={{fontSize:15}}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<Text style={{color:'#519BCC'}}>  privacy policy.</Text></Text>
         </View>
         <TouchableOpacity onPress={()=>navigation.navigate('')} style={{marginTop:15,borderRadius:5,backgroundColor:'#FFB200',width:deviceWidth/3,alignItems:'center',justifyContent:'center',height:50,marginLeft:10}}>
            <Text style={{padding:8,fontWeight:'bold',fontSize:16,color:'#1E1E1E'}}>REGISTER</Text>
         </TouchableOpacity>
    </ScrollView>
    

          
  );
}

const styles = StyleSheet.create({
 card:{
   borderRadius:35,
  
} 
 
});
