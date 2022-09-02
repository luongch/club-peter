var express = require('express');
var router = express.Router();
const async = require('async');
const Message = require('../models/message')
const User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  Message.find()
    .populate('author')
    .exec(function(err, message_list) {
      if(err) {
        return next(err)
      }
      console.log(message_list)
      res.render('index', { title: 'Club Peter',  user: req.user, messages: message_list });
    })

  //get all the messages and pass it to the index view

  
});

module.exports = router;
