var express = require('express');
var router = express.Router();
const messageController = require('../controller/messageController');

router.get('/',messageController.message_list);

router.post('/new', messageController.message_post);

module.exports = router;