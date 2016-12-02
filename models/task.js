const 	mongoose = require("mongoose"),
		Task = mongoose.Schema({
			label:String,
			complete:Boolean
		},{timestamps:true});

module.exports.Task = mongoose.model("Task", Task);