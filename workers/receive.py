import pika
import RainbowTableWorker

connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

channel.queue_declare(queue='hashQueue')


def callback(ch, method, properties, hashvalue):
    value = hashvalue.decode('ascii')
    print(" [RabbitMQ] Received MD5 hash:", value)
    RainbowTableWorker.main(value)


channel.basic_consume(callback,
                      queue='hashQueue',
                      no_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()
