const { Kafka } = require("kafkajs");

createProducer();

async function createProducer() {
    try {
        const kafka = new Kafka({
            clientId: "pub_sub_client",
            brokers: ["[ip_adress]:9092"] // brokers: ["192.168.1.1:9092"]
        });

        const producer = kafka.producer();
        console.log("Producer is connecting.")

        await producer.connect();
        console.log("Producer is connected.")


        const message_result = await producer.send({
            topic: "row_video",
            messages: [{
                value: "New video content is produced..",
                partition: 0
            }]
        });
        console.log("Message sent : ", JSON.stringify(message_result))
        await producer.disconnect();
    } catch (error) {
        console.log("Error occured.")
    } finally {
        process.exit(0);
    }
}