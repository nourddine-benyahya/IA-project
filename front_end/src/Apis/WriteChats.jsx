import axios from "axios";
export function WriteChats(question,answer,token) {
  var datas={
    "questions": question,
    "answer": answer
  }
  return axios.post(`http://localhost:3000/history/addHistory`,datas,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then((res) =>{
    console.log('inserted')
    return("ok")
  })
  .catch((err)=>"error");
}