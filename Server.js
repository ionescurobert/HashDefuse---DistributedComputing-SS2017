const io = require('socket.io')();

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer',Math.floor((Math.random() * 10) + 1));
        }, interval);
    });
});

const port = 8000;
io.listen(port);
console.log('Server is listening on port:', port);
