import * as React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import { Ionicons, MaterialCommunityIcons,MaterialIcons,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import {useState,useEffect} from 'react';


const deviceWidth = Math.floor (Dimensions.get('window').width)

let activeTabNo  = 1;
export default function Login () {
    
const navigation = useNavigation(); 
// const [activeTabNo, setactiveTabNo] = useState(1)
const [renderMe, setrenderMe] = useState(false)
 

// change active tab
const changetab = (id:any) =>{

activeTabNo=id
setrenderMe(!renderMe)

}

  return (
  
           <View style={styles.container}>
               <TouchableOpacity onPress={()=> {navigation.navigate('HomePage'), changetab(1)}} style={{alignItems:'center'}}>
                   <Ionicons style={[styles.tabIcons,{color:`${activeTabNo == 1?'#e01221':'#1234'}`}]}    name="home-outline"></Ionicons>
                   <Text style={{color:"black",fontSize:10}}>Home</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=> {navigation.navigate('PickScreen'),changetab(2)}} style={{alignItems:'center'}}>
                   <Ionicons style={[styles.tabIcons,{color:`${activeTabNo == 2?'#e01221':'#1234'}`}]}    name="ios-trail-sign-outline"></Ionicons>
                   <Text style={{color:"black",fontSize:10}}>Categories</Text>
               </TouchableOpacity>
               <TouchableOpacity  onPress={()=> {navigation.navigate('Cart'),changetab(3)}}  style={{alignItems:'center'}}>
                   <Ionicons style={[styles.tabIcons,{color:`${activeTabNo == 3?'#e01221':'#1234'}`}]}name="cart-outline"></Ionicons>
                   <Text style={{color:"black",fontSize:10}}>Cart</Text>
               </TouchableOpacity>
               <TouchableOpacity  onPress={()=> {navigation.navigate('UserProfile'),changetab(3)}}  style={{alignItems:'center'}}>
                   <AntDesign style={[styles.tabIcons,{color:`${activeTabNo == 3?'#e01221':'#1234'}`}]}name="user"></AntDesign>
                   <Text style={{color:"black",fontSize:10}}>Account</Text>
               </TouchableOpacity>
           </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-around',
        position:'absolute', 
        backgroundColor:'#FAFAFA',
        width:deviceWidth+1,
        marginTop:720,
        borderTopColor:'#9C6B78',
        borderTopWidth:1,
        alignItems:'center'
        
    },
    tabIcons:{
        color:'#BB2227',
        fontSize:25
    }
  })


