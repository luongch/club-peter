const { body, validationResult } = require("express-validator")
const Message = require('../models/message')
const mongoose = require('mongoose');

exports.message_get = (req,res,next) => {
    res.render("message",{})
}

exports.get_all_messages = (req,res,next) => {

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
        console.log("errors", errors)
        if(!errors.isEmpty()) {
            res.render("message", {
                message:req.body,
                errors:errors.array()
            })
        }

        console.log(req.body)
        const message = new Message(
            {
                title: req.body.title,
                message: req.body.message,
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