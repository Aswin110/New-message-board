var express = require('express');
var router = express.Router();
const messageController = require('../controller/messageController');

/* GET home page. */
router.get('/',messageController.message_list);

module.exports = router;