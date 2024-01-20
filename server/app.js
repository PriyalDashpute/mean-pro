var express = require('express');
var mongoose = require('mongoose');
require ('dotenv').config();

mongoose.connect(process.env.mongodb).then(()=>{
  console.log("db connected");
}).catch((error)=>{
  console.log(error);
  console.log('error connecting to mongo');
});

var userRouter = require('./api/user/user.route');
var app = express();
 app.use(express.json());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  })
  

app.use(express.json());
app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
