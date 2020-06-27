const {Kafka} = require("kafkajs");

createConsumer();
 
async function createConsumer(){
    try { 
        const kafka = new Kafka({
            clientId: "color_extra",
            brokers: ["[ip_adress]:9092"] // brokers: ["192.168.1.1:9092"]
            });
        const consumer = kafka.consumer({
            groupId: "cg1_group1"
        });
        console.log("Consumer is connecting.")
        await consumer.connect();
        console.log("Consumer is connected.")
        await consumer.subscribe({
            topic: "color_ex", 
            fromBeginning: true
        });
        await consumer.run({
            eachMessage:  async result => { 
                console.log('Coming Message : ',result.message.value.toString('utf8'),' Partition : ',result.partition) ;
            }
        });

    } catch (error) {
        console.log("Error occured. ",error)
    } 
}