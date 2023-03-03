const express = require("express");
const usersModel = require("../models/usersModel");
const routes = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')




routes.post("/register", (req, res) => {

  const { username, email, age, firstName, lastName, password } = req.body;

  if (!username || !email || !age || !firstName || !lastName || !password)
    return res.status(400).json({ message: "some input is empty" });


  bcrypt.genSalt(10, (err, salt) => {
    if (err)
      return res.status(500).json({ message: "err generation de salt" });

    bcrypt.hash(password, salt, (err, hash) => {
      if (err)
        return res.status(500).json({ message: "err generation de hash" });

      const usera = new usersModel({ ...req.body, password: hash });
      usera.save((err, usr) => {
        if (!err)
          res.status(500).json({ message: err })
        else
          res.status(201).json("done")
      })
    })
  })

});




routes.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(500).json({ message: "err de findOne" });

  usersModel.findOne({ "username": username }, (err, data) => {
    if (!data) {
      return res.status(500).json({ message: "err find" })
    }
    bcrypt.compare(password, data.password, (err, reslt) => {
      if (err) {
        return res.status(500).json({ message: "err compare" })
      }
      if (reslt) {
        jwt.sign({username:username},process.env.SECRET_KEY, {expiresIn: '600s'}, (err, token)=>{
            return res.json({ token,data })
        })

      } else {
        return res.status(500).json({ message: "err" })
      }
    })
  })






})












routes.get("/allUsers", (req, res) => {
  usersModel.find({}, (err, actors) => {
    if (!err) res.json(actors);
    else res.status(500).json({ message: "error" });
  });
});



module.exports = routes;
