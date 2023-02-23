require('dotenv').config()
const express = require ('express');
const router = express.Router();
const PORT = process.env.DEV_PORT || 4206;
const questions = require('../routes/questions.js');
const answers = require('../routes/answers.js')
const app = express ();
const fs = require ('fs');
const path = require ('path');
app.get ('/loaderio-1d5158839aa426d02b2dc7fca15b17d3', (req, res) => { 
  fs.readFile(path.join(__dirname,'loaderio.txt'), 'utf8', (err, data) => {
    if (err) {
    console.log(`error while reading loderio.txt: ${err}`);
     res.sendStatus(500);
    } else {
     res.status(200).send(data);
    }
  });
})

app.use('/qa/questions', questions);
app.use('/qa/answers', answers)
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('err.stack')
})

module.exports= app;
