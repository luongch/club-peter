const { body, validationResult } = require("express-validator")
const Message = require('../models/message')
const mongoose = require('mongoose');

exports.message_get = (req,res,next) => {
    res.render("message",{})
}

exports.message_delete = (req,res,next) => {
    console.log(req.body)
    Message.findByIdAndRemove(req.body.message_id, (err) =>{
        if(err) {
            return next(err)
        }
        res.redirect('/')
    });
}

exports.message_post = [
    body("title")
        .trim()
        .isLength({min:1})
        .escape()
        .withMessage("Title required"),
    body("message")
        .trim()
        .isLength({min:1})
        .escape()
        .withMessage("Message required")
    ,
    (req,res,next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            res.render("message", {
                message:req.body,
                errors:errors.array()
            })
        }
        
        const message = new Message(
            {
                title: req.body.title,
                message: req.body.message,
                author: req.user,
                dateCreated: Date.now()
            }
        )
        console.log(message)

        message.save((err)=>{
            if(err) {
                return next(err)
            }
            res.redirect('/')
        })
        
    }
]