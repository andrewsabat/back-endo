const express = require('express');
const app = express();

app.get('/', function(req, res){
    if (req.query.buttonName === "button1") {
        throw (req.query.buttonName + ' is blocked!');
    }
    else if (req.query.buttonName === "button2") {
        console.log(req.query.buttonName + " works correctly");
    }
    else if (req.query.buttonName === "button3") {
        console.log(req.query.buttonName + " works correctly");
    }
    else {
        res.sendFile(__dirname + '/html/lab#11.html');
    }
});

app.listen(80);
console.log("start!");