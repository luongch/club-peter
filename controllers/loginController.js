const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../models/user')
const { body,check, validationResult } = require("express-validator");
const passport = require('passport')

exports.user_login_get = (req,res,next) => {
    res.render("login", {title: "Login to Club Peter"})
}

exports.user_login_post = [
    body("username")
    .trim()
    .isLength({min:1})
    .escape()
    .withMessage("Username required"),
    body("password")
    .trim()
    .isLength({min:1})
    .escape()
    .withMessage("Password required")
    ,
    (req,res,next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.render("login", {
                title: "Login to Club Peter",
                errors: errors.array()
            })
            return;
        }
        
        passport.authenticate("local", {
            successRedirect: "/",
            failureRedirect: "/login"
        })(req,res,next)
    }    
]
