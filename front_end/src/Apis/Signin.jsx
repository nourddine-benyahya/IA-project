import axios from "axios";
import { signin } from '../Redux/UserSlice';
export function FnSignin(username,password,dispatch) {
  var datas={
    "username": username,
    "password": password
  }
  return axios.post(`http://localhost:3000/users/login`,datas,{
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) =>{
    dispatch(signin({username:res.data.data.username,token:res.data.token,firstName:res.data.data.firstName}))
    return("ok")
  })
  .catch((err)=>"username Or password incorect");
}