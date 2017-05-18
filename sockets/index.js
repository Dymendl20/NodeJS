const Twitter = require('node-tweet-stream');
const express = require('express');
const SocketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

const t = new Twitter({
    consumer_key: '*',
    consumer_secret: '*',
    token: '*',
    token_secret: '*'
});

io.on('connection', socket => {
    t.on('tweet', tweet => {
        if(tweet.user.description !== null) {
            io.emit('OnTweet', tweet.user.description);
        }
    });

    // t.on('error', err => {
    //     console.log('Oh no')
    //     io.emit('OnError', 'error_message');
    // });
});

server.listen(4000, () => console.log('Server connected on: 4000'));

t.track('bourse');
t.track('forex');
t.track('eurusd');
t.track('gbpeur');
t.track('trading');
t.track('trader');
t.track('trade');