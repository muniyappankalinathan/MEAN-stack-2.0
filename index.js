const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');

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
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist/'));
app.use('/authentication', authentication);

app.get('*',(req, res) => {
  //  res.send('<h1>hello world</h1>');
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));  
});

app.listen(port,() =>{
    console.log('listening on port:'+ port);
});