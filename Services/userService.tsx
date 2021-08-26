
import request from '../Utils/request';


async function  getUserInfo  () {

   return request('user/currentUser')
   
}
async function  UpdateUserInfo (data:any) {
   
    
   const res = await request('user/update',{method:"POST",data:data})
   return res;
 }
 async function  UserImgUpload (Img:any) {
 
   const data = await request('/media/upload',{method:"POST",data:Img})
  
   
   return data;
 }


export default {getUserInfo,UpdateUserInfo,UserImgUpload} 






