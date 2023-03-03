const express = require("express");
const historyModel = require("../models/historyModel");
const routes = express.Router();
const verifyToken = require('../middleware/auth')








routes.get('/myHistory',verifyToken.verifyToken,(req,res)=>{
  historyModel.find({'username':req.username.username},(err,data)=>{
    if (!err) return res.json(data)
    else return res.status(500).send('err')
  })

})

routes.post('/addHistory', verifyToken.verifyToken, (req, res) => {
  const date = new Date();
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  console.log(formattedDate); // "03/03/2023 13:18:37"
  username = req.username.username;
  const chata = new historyModel({ ...req.body, date:formattedDate ,username: username });
  chata.save((err, cht) => {
    if (!err) {
      res.status(500).json({ message: "done" });
    } else {
      res.status(201).json({ message: "err" });
    }
  });
});





routes.get("/all", (req, res) => {
    historyModel.find({}, (err, actors) => {
      if (!err) res.json(actors);
      else res.status(500).json({ message: "error" });
    });
  });



module.exports = routes;
  