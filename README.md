# Microservices (RESTful APIs)

## How to create a microservice & its APIs

<b>Step1:</b> Create NodeJS microservice

```
mkdir my-nodejs-service
cd my-nodejs-service
npm init -y
npm install express@4.17.1
```

<b>Step2:</b> Create server.js

```
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
```

<b>Step3:</b> Run the app

```
node server.js
```

## APIs

1. API name

```
 URL: http://localhost:8080/name
 Method: GET
 RequestBody: none
```

2. API daughter

```
 URL: http://localhost:8080/daughter
 Method: GET
 RequestBody: none
```

3. API bhai

```
 URL: http://localhost:8080/bhai
 Method: GET
 RequestBody: {
 "brotherCatogary" : "bada"
 }
```
