/* eslint-disable */
import axios from 'axios'
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    
    if(res.data.status==='sucess'){
        showAlert('success','Logged in sucessfully!')
        window.setTimeout(()=>{
            location.assign('/')
        },1000)
    }

  } catch (err) {
    showAlert('error',err.response.data.message);
  }
};


export const logout=async ()=>{
  try{
    const res=await axios({
      method:'GET',
      url:'/api/v1/users/logout',

    })
    if(res.data.status==='success') {
      showAlert('success','Logged out sucessfully!')
      
      location.reload()
    }
  }catch(err){
    console.log(err.response)
    showAlert('error','Error looging out. Try again!')
  }
}