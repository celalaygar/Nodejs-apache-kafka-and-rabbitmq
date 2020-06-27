const {Kafka} = require("kafkajs");
const log_data = require("./data.json");

createProducer();

async function createProducer(){
    try { 
        const kafka = new Kafka({
            clientId: "color_extra",
            brokers: ["[ip_adress]:9092"] // brokers: ["192.168.1.1:9092"]
            });

        const producer = kafka.producer();
        console.log("Producer is connecting.")

        await producer.connect();
        console.log("Producer is connected.")

        let messages = log_data.map(item => {
            return { 
                value : JSON.stringify(item), 
                partition : item.type == "system" ? 0 : 1
            } 
        });
        const message_result = await producer.send({
            topic: "color_ex",
            messages: messages
        });
        console.log("Message sent : ", JSON.stringify(message_result))
        await producer.disconnect();
    } catch (error) {
        console.log("Error occured.")
    } finally{
        process.exit(0);
    }
}