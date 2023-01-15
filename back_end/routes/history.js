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







routes.get("/all", (req, res) => {
    historyModel.find({}, (err, actors) => {
      if (!err) res.json(actors);
      else res.status(500).json({ message: "error" });
    });
  });



module.exports = routes;
  