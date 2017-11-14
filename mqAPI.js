let amqp = require('amqplib/callback_api');

function sendValue(hashValue, callback) {
    amqp.connect('amqp://localhost', function(err, conn) {
        conn.createChannel(function(err, ch) {
            let q = 'hashQueue';

            ch.assertQueue(q, {durable: false});
            ch.sendToQueue(q, new Buffer(hashValue));
            console.log(" [RabbitMQ] Sent %s to '%s'", hashValue, q);

            listenForResponse(callback);
            setTimeout(function () {
                conn.close()
            }, 500);
        });
    });
}


function listenForResponse(callback) {
    amqp.connect('amqp://localhost', function(err, conn) {
        conn.createChannel(function(err, ch) {
            let response_q = 'hashResponseQueue';

            ch.assertQueue(response_q, {durable: false});
            console.log(" [*] Waiting for defused hash...");
            ch.consume(response_q, function(msg) {
                console.log("[RabbitMQ] [x] Received defused hash: %s", msg.content.toString());
            }, {noAck: true});
        });
    });
}


module.exports = {
    sendValue: sendValue
};
