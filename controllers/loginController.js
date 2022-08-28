const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../models/user')
const { body,check, validationResult } = require("express-validator");
const passport = require('passport')

exports.user_login_get = (req,res,next) => {
    res.render("login", {title: "Login to Club Peter"})
}

exports.user_login_post = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
})    