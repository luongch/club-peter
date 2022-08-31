const mongoose = require('mongoose');
const User = require('../models/user')

exports.secret_get = (req,res,next) => {
    console.log("found secret page")
    //check if user is logged in otherwise redirect
    res.render("secret")
}

exports.change_membership_post = (req,res,next) => {
    console.log("user info", req.user)
    
    const user = req.user;
    user.isMember = !req.user.isMember;
    // user._id = req.user._id;

    console.log("updated user", user)
    
    User.findByIdAndUpdate(req.user._id, user, {}, (err) => {
        if (err) {
            return next(err)
        }
        res.redirect("/")    
    })

    
}