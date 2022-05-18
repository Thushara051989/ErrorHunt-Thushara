const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
    
    var newuser = {
        // "uid":req.param("uid"),
        // "pwd":req.param("pwd")
         uid:req.params.uid,  // Part#2, point 10 ..method is req.params
        pwd:req.params.pwd
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;