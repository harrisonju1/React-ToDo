//require takes in 'express' the dependency as the argument
var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

//redirect https to http because openweathermap doesn't support https
app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else{
    next();
  }
});

app.use(express.static('public'));

//start server
//listen takes in two arguments, the port and the function
app.listen(PORT,function(){
  console.log('Express server is up on port '+ PORT);
});
