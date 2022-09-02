const express = require('express');
const router = express.Router();
const secret_controller = require('../controllers/secretController')

router.get('/', secret_controller.secret_get)
/* PUT secret  page. */
router.post('/', secret_controller.change_membership_post);
router.post('/admin', secret_controller.become_admin_post)
module.exports = router;
