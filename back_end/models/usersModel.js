const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const usersSchema = new Schema({
    username: {type: String, required: true, unique: true},
	firstName : {type: String, required: true},
	lastName : {type: String, required: true},
	age :{type: Number, required: true},
	image : {type:String},
	email:{type: String, required: true, unique: true},
	password: {type: String, required: true} ,
}, {dbname:"speechProject" ,collection: "users"});

module.exports = mongoose.model("users", usersSchema, "users")