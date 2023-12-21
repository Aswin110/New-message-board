const Messages = require('../models/messages');
const asyncHandler = require('express-async-handler');

exports.message_list = asyncHandler(async (req, res, next) => {
	const message = await Messages.find({}).sort({date: -1}).exec();
	res.json(message);
});

exports.message_post = asyncHandler(async(req, res, next )=> {
	res.send('not implemented post '+ req.body.name);
});

