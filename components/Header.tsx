
import { View, Text,StyleSheet} from 'react-native';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {useState,useEffect} from 'react';

// service calling 
import userService from '../Services/userService';

import { TouchableOpacity } from 'react-native-gesture-handler';



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
      
          <View style={styles.container}>
             
             <TouchableOpacity onPress={() => navigation.openDrawer()} >
                  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Ionicons   style={{fontSize:30,color:'white'}} name="menu-outline">
              </Ionicons>
                      <Ionicons  style={{fontSize:30,color:'white'}} name="arrow-back-outline"> </Ionicons>                
                  </View>
            </TouchableOpacity>
     
                <TouchableOpacity onPress={()=> navigation.navigate('ProfileScreen')}>
                  <Text  style={{color:'white',fontSize:16,marginTop:2}}>{userInfo?.fullName}</Text>
                </TouchableOpacity>

             
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