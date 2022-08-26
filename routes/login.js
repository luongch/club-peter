const express = require('express');
const router = express.Router();
const login_controller = require('../controllers/loginController')

/* GET login  page. */
router.get('/', login_controller.user_login_get);

// POST login page
router.post('/', login_controller.user_login_post);

module.exports = router;
