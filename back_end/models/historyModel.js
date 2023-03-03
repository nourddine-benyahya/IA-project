const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const historySchema = new Schema({
    username: {type: String, required: true},
	questions : {type: String, required: true},
	answer : {type: String, required: true},
    date: {type: String, required: true},

}, {dbname:"speechProject" ,collection: "history"});

module.exports = mongoose.model("history", historySchema, "history")