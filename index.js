const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useMongoClient: true }, (err)=>{
  if(err){
    console.log('could not connect to database',err);
  }else{
    console.log('connected' + config.db);
    //console.log(config.secret);
  }
});
const port = 8080;

app.use(express.static(__dirname + '/client/dist/'));

app.get('*',(req, res) => {
  //  res.send('<h1>hello world</h1>');
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));  
});

app.listen(port,() =>{
    console.log('listening on port:'+ port);
});