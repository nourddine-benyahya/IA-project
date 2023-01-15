const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const historySchema = new Schema({
    username: {type: String, required: true},
	questions : {type: String, required: true},
	answer : {type: String, required: true},
    date_qa: Date

}, {dbname:"speechProject" ,collection: "history"});

module.exports = mongoose.model("history", historySchema, "history")