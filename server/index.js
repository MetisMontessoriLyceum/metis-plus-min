const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const UI = require('./ui');
const ui = new UI(io);

app.use(express.static('public'));

app.get('/api/schedule/bokke', function (req, res) {
    res.json({
        next: 'Math',
    });
});

app.get('/api/print', function (req, res) {
    ui.state.content = req.query;
    ui.update();
    res.end('success');
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
