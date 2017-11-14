// API used to communicate between Frontend (REACT) and Backend (NODE) via websocket

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function sendHash(hashvalue) {
    console.log("Client socket-io connected");
    socket.emit('sendHash', hashvalue);
}

function getResponse(responsevalue) {
    console.log("Got response via Websocket: ", responsevalue);
    socket.emit('getResponse', responsevalue);
}

export { sendHash, getResponse };