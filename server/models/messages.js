const mongoose = require('mongoose');
const {DateTime} = require('luxon');

const Schema = mongoose.Schema;

const messagesSchema = new Schema({
	name: {
		type:String,
		required:true,
		minLength:1,
		maxLength:15
	},
	message:{
		type:String,
		required:true,
		maxLength:100,
	},
	date: {
		type:Date,
		default: () => new Date(),
		immutable:true
	}
});

messagesSchema.virtual('date_formatted').get(function(){
	return DateTime.fromJSDate(this.date).toFormat('LLL dd yyyy HH:mm:ss');
});

module.exports = mongoose.model('messages', messagesSchema);