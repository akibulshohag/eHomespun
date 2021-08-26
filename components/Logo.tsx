import * as React from 'react';
import { Image,StyleSheet,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width

export default function Login ( ) {


  return (
  
         <TouchableOpacity style={{paddingVertical:10}}>
            <Image source={require("../assets/ebhubon-delivery-app-icon-red-02.png")}  style={styles.img} />
         </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
 

    img:{
        width: deviceWidth/2,
        height: deviceWidth/2,
        
        
    }
  })


