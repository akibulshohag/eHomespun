
import { View, Text,StyleSheet,Dimensions,TextInput} from 'react-native';
import * as React from 'react';
import { Ionicons,Entypo,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {useState,useEffect} from 'react';

// service calling 
import userService from '../Services/userService';

import { TouchableOpacity } from 'react-native-gesture-handler';
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height



const header = (renderMe:any) =>{

 
  const navigation = useNavigation(); 
  const [userInfo, setuserInfo] = useState([])
 
   useEffect(() => {
     userService.getUserInfo().then(res=>{
      //  console.log('................res',res);
       setuserInfo(res)
       
     }).catch(error=>console.log('error in user info',error))
    
   },[1,renderMe])



  return (
      
    <View style={{backgroundColor:'#519BCC'}}>
    <View style={{marginLeft:10,marginTop:15}}>
      <Text style={{fontSize:20,color:'#FFFFFF'}}>About eHomespun</Text>
      <Text style={{fontSize:14,color:'#FFFFFF'}}>eHomespun is a new home to buy and sell handmade, vintage, custom items and more. eHomespun was designed by two Handcrafters with one simple goal in mind – create a place for individual sellers and small businesses to sell their goods without the extra fees. Once you become a Seller, you can list and sell as much as you want without any extra fees. That’s the way online selling should be.</Text>
    </View>

    <View style={{marginLeft:10,marginTop:15}}>
      <Text style={{fontSize:20,color:'#FFFFFF'}}>Your Privacy Is Our Top Priority</Text>
      <Text style={{fontSize:14,color:'#FFFFFF'}}>Take peace in knowing that we go to great lengths to make sure your information is protected and stays protected. If there is ever anything you need, please feel free to reach out to us so we can get you the help you’re looking for.</Text>
    </View>

    <View style={{marginTop:20,marginLeft:10}}>
       <TouchableOpacity>
          <Text style={{fontSize:18,color:'#FFFFFF',textDecorationLine:'underline'}}>Privacy Policy</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Text style={{fontSize:18,color:'#FFFFFF',textDecorationLine:'underline'}}>Cookie Policy</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Text style={{fontSize:18,color:'#FFFFFF',textDecorationLine:'underline'}}>Buyer Terms And Condition</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Text style={{fontSize:18,color:'#FFFFFF',textDecorationLine:'underline'}}>Catalog</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Text style={{fontSize:18,color:'#FFFFFF',textDecorationLine:'underline'}}>Support</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Text style={{fontSize:18,color:'#FFFFFF',textDecorationLine:'underline'}}>Seller Terms And Condition</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Text style={{fontSize:18,color:'#FFFFFF',textDecorationLine:'underline'}}>Contact Us</Text>
       </TouchableOpacity>
    </View>
    <View style={{marginLeft:10,marginTop:30 }}>
      <Text style={{fontSize:20,color:'#FFFFFF'}}>Sign Up For our Newsletter</Text>
      <Text style={{fontSize:14,color:'#FFFFFF',marginTop:15,width:deviceWidth/1.2}}>Stay in the loop about exciting news, updates, deals and more! </Text>
    </View>

    <View style={{borderColor:'#FFFFFF',borderWidth:1,width:deviceWidth/1.1,borderRadius:8,marginLeft:12,backgroundColor:'#FFFFFF',marginTop:20}}>
        <TextInput style={{padding:5,fontSize:18,color:'#959595'}}>Email Address</TextInput>
     </View>
     <TouchableOpacity style={{borderColor:'#1E1E1E',borderWidth:1,width:deviceWidth/3,borderRadius:8,marginLeft:12,backgroundColor:'#FFFFFF',marginTop:15,alignItems:'center'}}>
        <Text style={{padding:5,fontSize:18,color:'#1E1E1E'}}>Subscribe</Text>
     </TouchableOpacity>

     <View style={{marginLeft:10,marginTop:70}}>     
         <View style={{marginLeft:5}}>
           <Text style={{fontSize:22,color:'#FFFFFF'}}>Folllow Us</Text>
         </View>
      <View style={{flexDirection:'row',marginTop:5}}>
         <Entypo style={{}} name='twitter-with-circle' color='#FFFFFF'size={35}/>
         <Entypo style={{marginLeft:5}} name='facebook-with-circle' color='#FFFFFF'size={35}/>
         <Entypo style={{marginLeft:5}} name='pinterest-with-circle' color='#FFFFFF'size={35}/>
         <AntDesign style={{marginLeft:5}} name='instagram' color='#FFFFFF'size={35}/>
       </View>
       <View style={{marginTop:65}}></View>
    </View>
</View>
    
    )
}

export default header;
const styles = StyleSheet.create({
 
  container:{
      paddingHorizontal:20,
      paddingVertical:10,
      backgroundColor:'#e01221',
      borderTopColor:'#ffffff',
      borderTopWidth:.5,
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems:'center',
      borderBottomColor:'#FFFFFF',
      borderBottomWidth:0.5
  }
})