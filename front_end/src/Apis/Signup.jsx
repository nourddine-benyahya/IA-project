import axios from "axios";
export function FnSignup(username,firstName,lastName,age,email,password,image) {
  var datas={
    "username": username,
    "firstName": firstName,
    "lastName": lastName,
    "age":age,
    "image":image,
    "email": email,
    "password": password
  }
  console.log(datas)
  return axios.post(`http://localhost:3000/users/register`,datas,{
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) =>{
    return("ok")
  })
  .catch((err)=>err);
}