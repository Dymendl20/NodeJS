const SocketIOClient = require('socket.io-client')('http://localhost:4000');

SocketIOClient.on('OnTweet', data => {
    console.log(data);
});