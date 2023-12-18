const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messages = new Schema({
	name: {
		type:String,
		required:true,
		minLength:3,
		maxLength:15
	},
	message:{
		type:String,
		required:true,
		maxLength:100,
	},
	date: {
		type:Date,
		default: () => Date.new(),
        immutable:true
	}
});