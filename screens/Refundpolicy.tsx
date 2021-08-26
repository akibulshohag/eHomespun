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
    <ScrollView style={{}} >
        <View style={{alignItems:'center',marginTop:30}}>
          <Text style={{fontSize:25,color:'#73C1EA',fontStyle:'italic',fontWeight:'bold'}}>eHomesPun</Text>
        </View>
          <View style={{marginTop:20}}>
            <Text style={{fontSize:30,marginLeft:15,fontWeight:'bold'}}>Refund Policy</Text>
            <Text style={{fontSize:15,marginLeft:15,textAlign:'justify',width:deviceWidth/1.1,marginBottom:10}}>eHomeSpun is not responsible for refunds of purchased items, as we do not sell the physical goods ourselves. When items are purchased through eHomeSpun, the said items are being purchased by an individual seller, not us. We encourage you (the buyer) to first try to find a resolution with the Seller. If there is an issue with your order (wrong item, damaged item, lost item, missing item, item is not as described, etc), you must reach out to the Seller whom you made the purchase from first. There is a system in place to do so on each Sellers shop page. Refunding is completely up to each Seller individually. Sellers make their own decisions in regards to refunding. That being said, Sellers reserve the right to offer refunds or to not offer refunds. That decision is theirs entirely. This information should be visibly stated on each Seller’s shop. However, if you and the Seller are unable to resolve the issue, you may use our Ticket System to submit a refund request to us. We may or may not grant you a refund, depending on the conclusion of the investigation of your case.</Text>
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
