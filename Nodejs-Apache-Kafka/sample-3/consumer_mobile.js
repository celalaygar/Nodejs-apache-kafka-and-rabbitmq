const {Kafka} = require("kafkajs");

createConsumer();
 
async function createConsumer(){
    try { 
        const kafka = new Kafka({
            clientId: "pub_sub_client",
            brokers: ["[ip_adress]:9092"] // brokers: ["192.168.1.1:9092"]
            });
        const consumer = kafka.consumer({
            groupId: "mobile_encoder_consumer_group"
        });
        console.log("Consumer is connecting.")
        await consumer.connect();
        console.log("Consumer is connected.")
        await consumer.subscribe({
            topic: "row_video", 
            fromBeginning: true
        });
        await consumer.run({
            eachMessage:  async result => { 
                console.log('Coming Message : ',result.message.value.toString('utf8'),' mobile_encoder' );
            }
        });

    } catch (error) {
        console.log("Error occured. ",error)
    } 
}