const {Kafka} = require("kafkajs");


createTopic();

async function createTopic(){
    try {
        console.log("Starting....")
        // Admin
        const kafka = new Kafka({
            clientId: "color_extra",
            brokers: ["[ip_adress]:9092"] // brokers: ["192.168.1.1:9092"]
            });
        const admin = kafka.admin();
        console.log("Kafka broker is connecting.")
        await admin.connect();
        console.log("Kafka broker is connected.")
        await admin.createTopics({
            topics: [
                {topic: "color_ex", numPartitions: 2}
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