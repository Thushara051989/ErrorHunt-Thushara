// Part#1,point1-check package.json ..Change main to app.js
const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');  //Part #2,point 7, usage of cors()
const bodyParser = require('body-parser');  //import body parser Part #1,point 2
const mongoose=require('mongoose');

// const nav= [            Part #2,point 6, nav is not used.
//     {
//         link:"/books",
//         title:"Books"
//     },
//     {
//         link:"/authors",
//         title:"Authors"
//     },
//     {
//         link:"/addbook",
//         title:"Add Book"
//     },
//     {
//         link:"/addauthor",
//         title:"Add Author"
//     }
// ]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute');  //Part#1,point 3,changed homerouter filename
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

 const app = new express(); 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 


app.get('/',cors(),function(req,res){    //Part #2,point 7, usage of cors()

    res.render('index',{ 
        nav:[{link:'/login',name:'Log In'},{link:'/signup',name:'Sign Up'}]
    
    })});




const PORT=(process.env.PORT || 3000);
app.listen(PORT,()=>{   //changed the port number Part#1,point5
    console.log(`Server Ready on ${PORT}`);
});