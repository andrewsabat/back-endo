const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("<h1>You are on Home Page!</h1> <h2>Try to append smth into the link with /</h2>");
});
app.get('/:text', function(req, res){
    res.send("Your link ends with - " + req.params.text);
});

app.listen(80);
