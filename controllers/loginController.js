const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../models/users')
const { body,check, validationResult } = require("express-validator");

exports.user_login_get = (req,res,next) => {
    res.render("login", {title: "Login to Club Peter"})
}

exports.user_login_post = [
    // body(username)
    // .trim()
    // .escape()
    // .isLength({min:1})
    // .withMessage("User name required"),
    // (req,res,next) => {
    //     const errors = validationResult(req);

    //     if(!errors.isEmpty()) {
    //         res.render("login", {
    //             title: "Login to Club Peter",
    //             user: req.body,
    //             errors: errors.array()
    //         })
    //     }
    // }

];