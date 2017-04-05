'use strict';

var isConnectedToDb = false;

const mongoose = require('mongoose');
const app = require('express')();

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost').then(function () {
    isConnectedToDb = true;
}).catch(function (error) {
    console.log(error.message);

    isConnectedToDb = false;
});

app.get('/', function (req, res) {
    res.send('Is connected to DB: ' + isConnectedToDb + '\n');
});

app.listen(7777);

console.log('Running on http://localhost:' + 7777);