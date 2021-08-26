
import request from '../Utils/request';


async function  Login  (params:any) {
   return request("user/deliveryLogin",{method:"POST",data:params})
   
}
async function  Registration  (params:any) {
  
   
   return request("user/deliverySignup",{method:"POST",data:params})
 
}


export default {Login,Registration} 






