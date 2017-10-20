import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function sendHash(hashvalue) {
    socket.emit('sendHash', hashvalue);
}

export { sendHash };