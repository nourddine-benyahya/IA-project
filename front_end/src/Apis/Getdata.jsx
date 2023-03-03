import axios from "axios";

export function Getdata(token) {
  return axios
    .get("http://localhost:3000/history/myHistory", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) =>{ return 'err'});
}