const express = require('express');
const router = express.Router();
const message_controller = require('../controllers/messageController')

router.get('/', message_controller.message_get)
/* PUT secret  page. */
router.post('/', message_controller.message_post);
router.post('/delete', message_controller.message_delete)
module.exports = router;
