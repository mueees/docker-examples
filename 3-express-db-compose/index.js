'use strict';

var isConnectedToDb = false;

const mongoose = require('mongoose');
const app = require('express')();

mongoose.Promise = Promise;

// pretty important! Uses "db" - the same as in the docker-compose file
var uri = 'mongodb://db';

// wait for db container
setTimeout(function () {
    mongoose.connect(uri).then(function () {
        isConnectedToDb = true;
    }).catch(function (error) {
        console.log(error.message);

        isConnectedToDb = false;
    });
}, 2000);

app.get('/', function (req, res) {
    res.send('Is connected to DB: ' + isConnectedToDb + '\n');
});

app.listen(7777);

console.log('Running on http://localhost:' + 7777);