
import request from '../Utils/request';


async function  pickList  () {
    
    
   return request("order/delivery/return?status=onTheWay")

   
}
async function  GetmyPickList  () {
    
    
   return request("order/delivery/return?status=Picked")

   
}
async function  getSinglePickDetails  (No:any) {
   

   

   return await request(`/order/delivery/return?deliveryNo=${No}`)
   
}
async function  GetmyPicks () {
    
    
   return request("order/delivery/return")

   
}


export default {GetmyPicks,pickList,GetmyPickList,getSinglePickDetails} 






