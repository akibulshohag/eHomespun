import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {useState,useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './components/drawerContent';
// screens

import Homepage from './screens/HomePage'
import Refundpolicy from './screens/Refundpolicy'
import PasswordReset from './screens/PasswordReset'
import Sellerterms from './screens/Sellerterms'
import Shop from './screens/Shop'
import BuyerTerms from './screens/BuyerTerms'
import LoginRegistration from './screens/LoginRegistration'
import Cart from './screens/Cart'



  // const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();


  // drawerContent = {props => <DrawerContent {...props}/>

function App() {

 


  return (
    <NavigationContainer>
        
       <Drawer.Navigator initialRouteName="Homepage" drawerContent = {props => <DrawerContent {...props}/>} >
         
         <Drawer.Screen name="Cart" component={Cart} options={{header: () => null}} />
         <Drawer.Screen name="LoginRegistration" component={LoginRegistration} options={{header: () => null}} />
         <Drawer.Screen name="BuyerTerms" component={BuyerTerms} options={{header: () => null}} />
         <Drawer.Screen name="Shop" component={Shop} options={{header: () => null}} /> 
         <Drawer.Screen name="Sellerterms" component={Sellerterms} options={{header: () => null}} />
         <Drawer.Screen name="PasswordReset" component={PasswordReset} options={{header: () => null}} />
         <Drawer.Screen name="Refundpolicy" component={Refundpolicy} options={{header: () => null}} />
         <Drawer.Screen name="Homepage" component={Homepage} options={{header: () => null}} />
         
         
         
      </Drawer.Navigator>
            
    </NavigationContainer>
  );
}



export default App;
