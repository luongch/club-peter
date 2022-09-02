const mongoose = require('mongoose');
const User = require('../models/user')

exports.secret_get = (req,res,next) => {
    //check if user is logged in otherwise redirect
    res.render("secret")
}

exports.change_membership_post = (req,res,next) => {
    
    const user = req.user;
    user.isMember = !req.user.isMember;
    
    User.findByIdAndUpdate(req.user._id, user, {}, (err) => {
        if (err) {
            return next(err)
        }
        res.redirect("/")    
    })
}

exports.become_admin_post = (req,res,next) => {    
    const user = req.user;
    user.isAdmin = true;
    
    User.findByIdAndUpdate(req.user._id, user, {}, (err) => {
        if (err) {
            return next(err)
        }
        res.redirect("/")    
    })

    
}