let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);
let crypto = require('crypto');

server.listen(80);
console.log('Server starts!');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/lab#8.html');
});

io.sockets.on('connection', (socket) => {
    let id = crypto.randomBytes(20).toString('hex');

    socket.on('send message', (data) => {
        io.sockets.emit('new message', {msg: data, user: id});
    });

});