#! /usr/bin/env node

console.log('to populate some username and messages');

const userArgs = process.argv.slice(2);

const Messages = [];

const mongoose = require('mongoose');
const Message = require('./models/messages');

mongoose.set('strictQuery', false);
  
const mongoDB = userArgs[0];
  
main().catch((err) => console.log(err));

async function main() {
	console.log('Debug: About to connect');
	await mongoose.connect(mongoDB);
	console.log('Debug: Should be connected?');
	await createMessage();
	console.log('Debug: Closing mongoose');
	mongoose.connection.close();
}

async function messageCreate (index, name, message) {
	const messageDetails =
		{
			name: name,
			message: message,
		};

	const userMessage = new Message(messageDetails);

	try {
		await userMessage.validate();
		await userMessage.save();
		Messages[index] = userMessage;
		console.log(`Added new user ${name}`);
	} catch (err) {
		console.error(`Error creating message for user ${name}:`, err.message);
	}
}

async function createMessage() {
	console.log('Adding new message');
	await Promise.all([
		messageCreate(0, 'john', 'hello, world'),
		messageCreate(1, 'Sam', 'hello, world'),
		messageCreate(2, 'chris', 'hello, world'),
		messageCreate(3, 'albert', 'hello, world'),
		messageCreate(4, 'jo', 'hello, world'),
		messageCreate(5, 'jack', 'hello, world'),
		messageCreate(6, 'joe', 'hello, world'),
	]);
}
