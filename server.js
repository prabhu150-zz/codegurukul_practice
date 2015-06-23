var express = require('express'); //Node Module for express server

var app=express();

app.set('views',__dirname+'/server/views');
console.log(__dirname+"   This is a variable");
app.set('view engine','jade');
app.use(express.static('public'));
//Routes
app.get('/',function(req,res)
{

res.render('index');

});


// app.get('/login',function(req,res)
// {

// res.render('login');

// });
//req=>request res=>response
app.listen(3020);
console.log("Express Server is listening at port 3020");