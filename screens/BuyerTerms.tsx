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
    <View>
    <ScrollView style={{backgroundColor:'#EFE7DC'}} >
        
        <View style={{alignItems:'center',marginTop:30}}>
          <Text style={{fontSize:25,color:'#73C1EA',fontStyle:'italic',fontWeight:'bold'}}>eHomesPun</Text>
        </View>
          <View style={{marginTop:20}}>
            <Text style={{fontSize:30,marginLeft:15,fontWeight:'bold'}}>Buyer Terms and Conditions</Text>
            <Text style={{fontSize:15,marginLeft:15,textAlign:'justify',width:deviceWidth/1.1}}>At eHomespun.com, we strive to deliver you unique, high quality products that are hand crafted by extraordinary individuals while keeping customer satisfaction a top priority.</Text>
            
          </View>
          <View style={{marginTop:10,flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>All sales transactions are strictly between you (the buyer) and the individual seller/shop. Payments will be securely made to individual seller/shops for all products and services. We (https://ehomespun.com) are not responsible for any buyer items, shipping, returns, exchanges etc. We can however, assist you in getting any issues resolved if not satisfied with a product/service as customer satisfaction is a priority to us.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>If you (the buyer) need any information about products or services that are not listed in the description, you must contact the individual seller/shop directly.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>If you (the buyer) are having issues contacting a seller/shop or receiving seller/shop responses and the issue is not being resolved in a timely manner, please feel free to create a support ticket so we can assist you in getting a resolution.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>We encourage that you (the buyer) leave feedback or rate individual sellers/shops.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}><Text style={{fontWeight:'bold'}}>Reviews:</Text> It is very important that if you (the buyer) leave a review, it is an honest review. These individuals work hard to make these products and try get them to you as soon as possible. That being said, please do not leave a bad review on Sellers’ Shops if they did everything they were supposed to do on their end (sent correct item(s), item(s) arrived in good condition, item(s) arrived on time, etc.). Intentionally leaving a false bad review can damage a Sellers’ brand. Therefore, if you are found leaving false bad reviews intentionally, your account could be subject to temporary suspension or even a permanent ban. Honesty goes a long way and that is all that is being asked of you when leaving a review. Thank you.</Text>
          </View>

          <View style={{marginTop:20,marginLeft:20,marginBottom:65}}>
               <Text style={{fontSize:16,textAlign:'justify',width:deviceWidth/1.2,marginTop:5,color:'#1E1E1E'}}>Let’s do some shopping!</Text>
               <Text style={{fontSize:18,textAlign:'justify',width:deviceWidth/1,marginTop:5,}}>Thank you for using  eHomespun.com!</Text>
          </View>
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
