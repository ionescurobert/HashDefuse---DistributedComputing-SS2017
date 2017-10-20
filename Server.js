const io = require('socket.io')();
const mqAPI = require('./mqAPI');

io.on('connection', (client) => {
    client.on('sendHash', (hashvalue) => {
        console.log('Client -> Server: ', hashvalue);
        mqAPI(hashvalue);
    });
});

const port = 8000;
io.listen(port);
console.log('Server is listening on port:', port);