"use strict";

import express from 'express';
import path from 'path';
import mysql from 'mysql';
import bodyParser from 'body-parser';
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log('Running...');
})

app.use(express.static(path.resolve() + '/server'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


//app.use(express.json());

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'jobb'
});

db.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("Connected!");
});

app.get('/', (req, res) => {
  res.send("Hello world");
})

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/Get', function (req, res) {
  let sql = `SELECT * FROM user`;
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send(results);
  });
});



app.post('/Set', (req, res) => {
  if(req.body.pid != 0){
    let sql = `INSERT INTO user (navn, address, telefon, fodsel) VALUES ("${req.body.navn}",${req.body.address},${req.body.telefon}, ${req.body.fodsel})`
    let query = db.query(sql, (err, results) => {
      if(err) throw err;
      console.log(results);
      res.send('user added');
    })
  } else {
    res.send('Error, invalid post id');
    console.log('Error, invalid post id');
  }
})