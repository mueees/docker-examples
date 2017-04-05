'use strict';

var visitCounts = 0;

const app = require('express')();

app.get('/', function (req, res) {
    visitCounts++;

    res.send('Visit counts : ' + visitCounts + '\n');
});

app.listen(7777);

console.log('Running on http://localhost:' + 7777);