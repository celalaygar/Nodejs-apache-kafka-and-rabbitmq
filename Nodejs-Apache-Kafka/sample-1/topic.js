const {Kafka} = require("kafkajs");


createTopic();

async function createTopic(){
    try {
        console.log("Starting....")
        // Admin
        const kafka = new Kafka({
            clientId: "kafka_sample_1",
            brokers: ["[ip_adress]:9092"] // brokers: ["192.168.1.1:9092"]
        });
        const admin = kafka.admin();
        console.log("Kafka broker is connecting.")
        await admin.connect();
        console.log("Kafka broker is connected.")
        await admin.createTopics({
            topics: [
                {topic: "topic1", numPartitions: 1},
                {topic: "topic2", numPartitions: 2}
            ]
        })
        console.log("Topics are created")
        await admin.disconnect();
    } catch (error) {
        console.log("Error occured.")
    } finally{
        process.exit(0);
    }
}