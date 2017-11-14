import sys
import RainbowTableWorker
import threading
import pika

###################################
# Author: Robert Ionescu
# Version: 0.1
###################################


def callback(ch, method, properties, hashvalue):
    value = hashvalue.decode('ascii')
    print(" [RabbitMQ] Received MD5 hash:", value)
    result = RainbowTableWorker.main(value)

    if result == 1:
        print("Nothing found in RainbowTable")
    else:
        result = result.replace("\n", "")
        print(result)
        connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
        channel = connection.channel()

        channel.queue_declare(queue='hashResponseQueue')

        channel.basic_publish(exchange='',
                              routing_key='hashResponseQueue',
                              body=result)
        print(" [x] Sent " + result + " to hashResponseQueue")
        connection.close()


def main():
    print("Worker Manager started...")

    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()

    channel.queue_declare(queue='hashQueue')

    channel.basic_consume(callback,
                          queue='hashQueue',
                          no_ack=True)

    print(' [*] Waiting for messages.')
    channel.start_consuming()


if __name__ == '__main__':
    main()
