var express = require('express');
var router = express.Router();
const Message = require('../models/message')

/* GET home page. */
router.get('/', function(req, res, next) {
  Message.find()
    .exec(function(err, message_list) {
      if(err) {
        return next(err)
      }
      res.render('index', { title: 'Club Peter',  user: req.user, messages: message_list });
    })

  //get all the messages and pass it to the index view

  
});

module.exports = router;
