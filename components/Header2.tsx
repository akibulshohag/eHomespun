
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {useState,useEffect} from 'react';


// service calling 
import userService from '../Services/userService';


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
              <TouchableOpacity  onPress={navigation.goBack}>
                  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                      <Ionicons style={{fontSize:30,color:'black',marginLeft:10}} name="arrow-back">
                      </Ionicons>
                      
                 </View>
              </TouchableOpacity>
              <View style={{alignItems:'center',marginLeft:100}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>My Wallet</Text>
              </View>
              
          </View>
    
    )
}

export default header;
const styles = StyleSheet.create({
 
  container:{
    height:80,
    backgroundColor:'#FFFFFF',
    borderTopColor:'#ffffff',
    borderTopWidth:.5,
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor:'#FFFFFF',
    borderBottomWidth:0.5,
    marginTop:10,
    elevation:6,
    
  }
});