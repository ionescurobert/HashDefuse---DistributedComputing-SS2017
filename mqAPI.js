let amqp = require('amqplib/callback_api');

module.exports = function (hashValue) {
    amqp.connect('amqp://localhost', function(err, conn) {
        conn.createChannel(function(err, ch) {
            let q = 'hashQueue';

            ch.assertQueue(q, {durable: false});
            ch.sendToQueue(q, new Buffer(hashValue));
            console.log(" [RabbitMQ] Sent %s to '%s'", hashValue, q);

        });
    });
};