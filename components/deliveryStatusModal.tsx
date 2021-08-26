import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { Dimensions } from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {useState,useEffect} from 'react';


const deviceWidth = Dimensions.get('window').width


export default function DeleteProductModal({setshowModal,setstatus}:any) {
    const navigation = useNavigation(); 
   
        const showModal = () =>{
            setshowModal(false)
        }
        //   delete product 
      
  

  return (
    <View style={styles.centeredView}>
     
      <Modal
        animationType="slide"
        transparent={true}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style={styles.Header}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',paddingHorizontal:20}}>
                       <View>
                          {/* <Text style={styles.modalText}>Select Any Status</Text> */}
                       </View>
                        <View  style={{justifyContent:'center',alignItems:'center',paddingTop:5}}>
                            <Ionicons name="close-circle-outline"  color='white' size={28}  onPress={()=> showModal()} />
                        </View>
                  </View>   
              </View>
              <View style={styles.body}>
                   <View style={{alignItems:'center'}}>
                        <Text style={{paddingTop:20,fontSize:15,fontWeight:'bold',paddingHorizontal:20}}>Change Delivery Status</Text>
                   </View>
                   <View style={{paddingVertical:20}}>
                        <TouchableOpacity style = {[styles.submitButton,{backgroundColor:'green'}]} onPress={()=>setstatus('delivered')}>
                            <Text style = {styles.submitButtonText}>Delivered</Text>
                        </TouchableOpacity>
                   </View>
                   <View style={{paddingVertical:20}}>
                        <TouchableOpacity style = {[styles.submitButton,{backgroundColor:'#4D4D4D'}]} onPress={()=>setstatus('failed')}>
                            <Text style = {styles.submitButtonText}>Failed</Text>
                        </TouchableOpacity>
                   </View>
                  
              </View>
          </View>
        </View>
      </Modal>
     
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#1234',
    borderRadius: 10,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
 
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalText: {
    paddingVertical:10,
    color:"white",
    fontSize:16,
  },
  submitButton: {
    backgroundColor: '#BB2025',
    alignItems:'center',
    borderRadius:5,
    paddingHorizontal:deviceWidth/4-60,
 

 },

 submitButtonText:{
    color: 'white',
    fontSize:16,
    paddingVertical:5,
    paddingHorizontal:20,
    
 },

 Header:{
    backgroundColor:'#BB2227',
    width:deviceWidth-60,
   
    zIndex:9999,
    borderTopRightRadius:10,
    borderTopLeftRadius:10
 },
 body:{
    backgroundColor:'#FFFFFF',
    width:deviceWidth-60,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    paddingHorizontal:20
 },



 
});


