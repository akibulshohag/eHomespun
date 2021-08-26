import React from 'react';
import { View, StyleSheet,Image,TouchableOpacity} from 'react-native';
import {Title,Drawer,Text,} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import { Ionicons,FontAwesome5,MaterialCommunityIcons,MaterialIcons,Entypo } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { CommonActions } from '@react-navigation/native';
import {useState,useEffect} from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';




// servicess
import UserService from '../Services/userService'


const apiImagepath = 'https://api.ebhubon.com/media/images/';
let cnt=0;
export function DrawerContent(props:any) {

    

  const isDrawerOpen = useIsDrawerOpen();
  const [showModal, setshowModal] = useState(false)

//    logout  funtion 
    const logout  = async () =>{
       
        
      await  SecureStore.deleteItemAsync('accessToken')
      props.navigation.navigate('LoginScreen')
        // props.navigation.dispatch(
        //   CommonActions.reset({
        //     index: 1,
        //     routes: [
        //       { name: 'LoginScreen' },
        //     ]
        //     ,
        //   })
        // );
        console.log("logged out");
      
   
      }

    //   get RiderDetails
  
    let sellerInfo:any;
    const [RiderDetails, setRiderDetails] = useState([])
    const [Rider, setRider] = useState('')

    


    return(
        <View style={{flex:1}}>
          
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                  {RiderDetails?
                    <View style={styles.userInfoSection}>
                      <TouchableOpacity  style={{paddingBottom:5}}>
                      {/* <TouchableOpacity onPress={()=> props.navigation.navigate('ShopProfile') } style={{paddingBottom:5}}> */}

                        {/* <View style={{flexDirection:'row',marginTop: 15}}>
                          {RiderDetails?.avatar?
                            <Image  source={{uri:`${apiImagepath}/${Rider}`}}  size={50} style={styles.sellerImg} />
                              :
                            <Image source={require('../assets/user.png')} size={50} style={styles.sellerImg} />
                          }
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                              {RiderDetails?.fullName?
                               <Title style={styles.title}>{RiderDetails?.fullName}</Title>    
                               :
                               <Title style={styles.title}>Ebhubon Express</Title>    
                              }                       
                            </View>
                       </View> */}
                    </TouchableOpacity>
                   </View>
                    :null}
                    
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                           icon={({color, size}) => (
                            <MaterialCommunityIcons   name="home"   color='#e01221' size={size}  />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Homepage')}}
                           />
                        <DrawerItem 
                           icon={({color, size}) => (
                            <MaterialCommunityIcons   name="login"   color='#e01221' size={size}  />
                            )}
                            label="Login/Signup"
                            onPress={() => {props.navigation.navigate('LoginRegistration')}}
                           />
                        <DrawerItem 
                            icon={({color, size}) => (
                            // <Ionicons  color='#e01221' size={size}   name="gift-outline"></Ionicons>
                            <MaterialCommunityIcons  name="account-outline"    color='#e01221'   size={size}  />

                            )}
                            label="My Account"
                            onPress={() => {props.navigation.navigate('ProfileScreen')}}
                        />
                         <DrawerItem 
                        icon={({color, size}) => (
                        <MaterialCommunityIcons  name="shopping"    color='#e01221'   size={size}  />
                        )}
                        label="Shop"
                        onPress={() => {props.navigation.navigate('Shop')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                        <Entypo  name="shopping-cart"    color='#e01221'   size={size}  />
                        )}
                        label="Cart"
                        onPress={() => {props.navigation.navigate('Cart')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                        <MaterialCommunityIcons  name="format-list-checks"    color='#e01221'   size={size}  />
                        )}
                        label="CheckOut"
                        onPress={() => {props.navigation.navigate('MyDeliveryScreen')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                        <MaterialIcons  name="support-agent"    color='#e01221'   size={size}  />
                        )}
                        label="Support"
                        onPress={() => {props.navigation.navigate('MyDeliveryScreen')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                        <MaterialCommunityIcons  name="format-list-checks"    color='#e01221'   size={size}  />
                        )}
                        label="Buyer terms & condition"
                        onPress={() => {props.navigation.navigate('BuyerTerms')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                        <MaterialCommunityIcons  name="format-list-checks"    color='#e01221'   size={size}  />
                        )}
                        label="Seller terms & condition"
                        onPress={() => {props.navigation.navigate('Sellerterms')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                        <MaterialCommunityIcons  name="format-list-checks"    color='#e01221'   size={size}  />
                        )}
                        label="Refund Policy"
                        onPress={() => {props.navigation.navigate('Refundpolicy')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                        <MaterialCommunityIcons  name="format-list-checks"    color='#e01221'   size={size}  />
                        )}
                        label="Password reset"
                        onPress={() => {props.navigation.navigate('PasswordReset')}}
                    />
                   
                      
                    </Drawer.Section>

                   
                      {/* <DrawerItem 
                        icon={({color, size}) => (
                        <MaterialIcons  name="rate-review"   color='#e01221' size={size}  />
                        )}
                        label="Reviews"
                        onPress={() => {props.navigation.navigate('CurrrentJobScreen')}}
                    /> */}
                   
                </View>
               
                </DrawerContentScrollView>

                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <FontAwesome5 name="sign-out-alt"  color="#BB2227"  size={size}  />
                        )}
                        label="Sign Out"
                        onPress={() => {logout()}}
                    />
                </Drawer.Section>
                
           
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      paddingBottom:10,
      borderBottomWidth:1,
      borderBottomColor:'#f4f4f4'
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    sellerImg:{
      borderColor:'#BB2227',
      borderWidth:1,
      width:50,
      height:50,
      borderRadius:50
    }
  });