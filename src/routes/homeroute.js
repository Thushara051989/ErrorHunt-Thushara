const express = require('express'); 
const homeRouter = express.Router();

homeRouter.get('/',function(req,res){

    res.render('home',{});
    
})







module.exports = homeRouter;