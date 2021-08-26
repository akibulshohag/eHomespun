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
            <Text style={{fontSize:30,marginLeft:15,fontWeight:'bold'}}>Seller Terms and Conditions</Text>
            <Text style={{fontSize:16,marginLeft:15,textAlign:'justify',width:deviceWidth/1.1,fontWeight:'bold'}}>At eHomespun we strive to keep things simple, yet exceptional. Please take a few minutes to review these simple guidelines for Sellers.</Text>
            
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5,fontWeight:'bold'}}>eHomespun.com reserves the right to suspend/ban seller accounts. We will never suspend or ban an account without reaching out to the seller to find a solution first.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5,fontWeight:'bold'}}>eHomespun reserves the right to make changes to these guidelines at any given time. If any changes are to be made, we will announce the said changes to all of you (the sellers).</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5,fontWeight:'bold'}}>Please register for, or link your <Text style={{color:'#FF6900',textDecorationLine:'underline'}}>PayPal</Text> or <Text style={{color:'#FF6900',textDecorationLine:'underline'}}>Stripe</Text> account to your shop so you can receive payments. Direct Bank Transfer is also an option.</Text>
          </View>
          <View style={{marginTop:20}}>
            <Text style={{fontSize:22,marginLeft:15,fontWeight:'bold',textDecorationLine:'underline',color:'#9B51E0'}}>Facebook Support Group</Text>
            <Text style={{fontSize:16,marginLeft:15,textAlign:'justify',width:deviceWidth/1.1}}>We encourage all sellers to join our Facebook group: <Text style={{color:'#0693E3'}}>eHomespun seller support.</Text> This will allow sellers to reach out to one another and to us to discuss various things, ratings, encouragement, advice etc. Please be respectful to one another and keep the group positive! Positivity goes a long way!</Text>
            
          </View>
          <View style={{marginTop:20}}>
            <Text style={{fontSize:22,marginLeft:15,fontWeight:'bold'}}>Seller Membership Specials:</Text>
            <Text style={{fontSize:16,marginLeft:15,textAlign:'justify',width:deviceWidth/1.1}}>eHomespun will have discounts or special deals on Seller Memberships from time to time. The price you pay for the promotion(s) will be for that specific membership, for that specific membership timeframe. Prices are subject to change. Example: Annual Seller Membership is on sale for $9.99 on April 30th, 2021. If purchased on April 30th, 2021 for $9.99, that membership will end on April 30th, 2022. Upon renewal, the membership price may no longer be on sale for the previous $9.99.</Text>
            
          </View>
          <View style={{marginTop:20}}>
            <Text style={{fontSize:22,marginLeft:15,fontWeight:'bold',textDecorationLine:'underline'}}>Guidelines and Rules</Text>
            
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>You (the seller) will be responsible for any and all fees through your shop. Examples are: Sales tax, Shipping and returns, PayPal, transfers, etc. Depending on the situation, we may be able to assist with return fees. This will be case by case. However, please do not hesitate to reach out to us at any time, as we are always ready and happy to assist you.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>You (the seller) can choose whether or not to have a refund and return policy on your products. Whichever you decide, please make it visible for buyers to see that you do or do not have a return policy.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>Sellers are responsible for refunds, returns, and exchanges. If needed, you can reach out to us to step in and find a resolution, as we may be able to issue the refund instead of you. Please do not hesitate to reach out.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>It is up to you (the seller) to ensure that items posted by you are accurately described for the buyers (size, shape, color, material etc.). This will help make things easier for both parties (you and the buyers) and help mitigate confusion for shoppers.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>If you (the seller) upload pictures for product example purposes, but you make/sell other types (size, shape, color, material etc.), please be sure to include in the description that the cover picture is just an example of your work, while providing item description of actual product you are selling.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>We strongly recommend that you (the seller) watermark your pictures. This will help prevent others from using your images without authorization.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>Wholesalers are welcome. If your shop is based off of buying and or selling bulk/wholesale items, you are more than welcome to sell here!</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>Do not harass other individual sellers or shops. It is important that we all respect each others spaces.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>Do not try to interfere, threaten, drive away customers or business from another individual seller or shop.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>Please do not list items that are racist, discriminatory or portray hate in any way, shape, or form.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>You (the seller) will be responsible for protecting buyer information. Please do not share this information with anyone, ever. Payment information and transactions will be secure and encrypted to help with customer privacy.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>If it is reported that these rules and guidelines have not been followed by a seller, we will open a case and do an investigation. If evidence shows that these rules and guidelines were not followed, your account may be subject to suspension or permanent ban but we will NEVER do so without reaching out to you (the seller) first to discuss the situation and find a solution.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>It is important that you (the seller) try to resolve any and all customer issues that may arise in a timely manner. If not resolved in a timely manner, customers will have the option to create a customer support ticket, which we will handle. We will reach out to you (the seller) about the issue to try to find a resolution with you. The same applies for you (the seller): If you and the customer cannot reach a resolution, please do not hesitate to reach out to us for help.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}> <Text style={{fontWeight:'bold'}}>Seller Protection: </Text> Your shop is your business and we totally understand that. YOU are the boss of your own shop, not us. Take peace in knowing that we are here to help you thrive. We want you to have your freedom as a Seller. Your protection is a priority to us, so please let us know if there is ever anything you need. For example: There are numerous things that can lead to a bad review of your shop, and we want you to know that we are here to help. Sometimes, there might be a bad review even though you did everything you could to make the customer happy. If you did everything on your part (on time delivery, product is not damaged, product is as described, etc.) and the customer still leaves a bad review just to damage your brand, please do not hesitate to contact us so we can get this taken care of. Leaving false negative reviews is unacceptable and there are consequences for the buyer(s) in doing so. Again, please do not hesitate to reach out so we can help.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>No spam/scam accounts. If you ever suspect a spam/scam account, please report the account to us so we can look into it/remove the account.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5}}>Last but not least, it is important to ensure that customers are happy with their products and services. Customer satisfaction is a difference maker and should be a top priority for all sellers.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Entypo style={{marginLeft:10,}} name='dot-single' color='#1E1E1E'size={30}/>
            <Text style={{fontSize:15,textAlign:'justify',width:deviceWidth/1.2,marginTop:5,fontWeight:'bold'}}>Wholesalers, D.I.Y craft kits, paints, stains, waxes, sealers, crafting tools, fabrics, digital downloads, subscriptions and tutorials ARE allowed. <Text style={{textDecorationLine:'underline',color:'#C18503'}}> If your craft category is not listed, please do not hesitate to reach out to us so we can get it added for you.</Text></Text>
          </View>
          <View style={{marginTop:20}}>
            <Text style={{fontSize:15,marginLeft:15}}>Please feel free to reach out to us directly if you have any questions, comments, or concerns.</Text>
            <Text style={{fontSize:15,marginLeft:15,textAlign:'justify',width:deviceWidth/1.1,marginTop:15}}>contact.us@ehomespun.com</Text>
            <Text style={{fontSize:15,marginLeft:15,textAlign:'justify',width:deviceWidth/1.1,marginTop:15}}>Thank you</Text>
            <Text style={{fontSize:15,marginLeft:15,textAlign:'justify',width:deviceWidth/1.1,marginTop:15}}>eHomespun.com</Text>
            <Text style={{fontSize:15,marginLeft:15,textAlign:'justify',width:deviceWidth/1.1,marginTop:15}}>By creating a Seller account with eHomespun, you (the seller) agree to these terms and conditions.</Text>
            
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
