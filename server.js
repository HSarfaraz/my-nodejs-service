const express = require('express');

var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// routes will go here

/* API name */
app.get('/name', function (req, res, next) {
  res.send('Sarfraz Hussain');
});

/* API daughter */
app.get('/daughter', function (req, res, next) {
  res.send('Maryam Sarfraz');
});

/* API bhai */
app.get('/bhai', function (req, res, next) {
  var brotherCatogary = req.body.brotherCatogary;
  console.log(brotherCatogary);
  if (brotherCatogary == 'bada') {
    res.send('Siraj Chaudhary');
  } else if (brotherCatogary == 'chhota') {
    res.send('Aamer Sohail');
  } else {
    res.send('Not Found');
  }
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
