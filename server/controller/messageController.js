const Messages = require('../models/messages');
const asyncHandler = require('express-async-handler');
const debug = require('debug')('message');

exports.message_list = asyncHandler(async (req, res, next) => {
	const message = await Messages.find({}).sort({date: 1}).exec();
	if (message === null ){
		debug('message not found');
		const err = new Error('User not found');
		err.status = 400;
		next(err);
	}
	res.json(message);
});

exports.message_post = asyncHandler(async(req, res, next )=> {
	const newMessage = new Messages(req.body);
	await newMessage.save();
	res.send('Saved to database'+ newMessage);
});

