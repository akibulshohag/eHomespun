
import request from '../Utils/request';


async function  getDeliveryJobs  (time) {


// console.log("...............time",timeArr);
   return request(`order/delivery?status=Picked?createdAt=${time}`)
   
}
async function  getUserDeliveryList  (time) {
    
    return request(`/order/delivery?status=delivered?createdAt=${time}`)
    
 }
 async function  getUserDeliveryFailedList  (time) {
    
    return request(`/order/delivery?status=failed?createdAt=${time}`)
    
 }

//  pick performance 

async function  pickList  (time) {
    
   
   return request(`order/delivery/return?status=Picked?createdAt=${time}`)

   
}
async function  pickDeliveredList  (time) {
    
 
   return request(`order/delivery/return?status=delivered?createdAt=${time}`)

   
}
async function  pickFailedList  (time) {
    
   
   return request(`order/delivery/return?status=failed?createdAt=${time}`)

   
}


export default {pickFailedList,pickDeliveredList,pickList,getDeliveryJobs,getUserDeliveryList,getUserDeliveryFailedList} 






