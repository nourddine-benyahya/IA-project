require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//call configs
const port = process.env.PORT;
const url = process.env.URL_MONGOOSE;
const dbname = process.env.DBNAME;

//call routs
const userRoute = require("./routes/users");
const historyRoute = require("./routes/history");


//mongo connect
mongoose
  .connect(`${url}/${dbname}`, { useNewUrlParser: true, dbName:dbname })
  .then(() => console.log("connexion done"))
  .catch((error) => console.log('connexion error'));


app.use('/users', userRoute);
app.use('/history', historyRoute);



app.listen(port, (err) => {
    if (!err) console.log("server done");
    else console.log("error server");
  });