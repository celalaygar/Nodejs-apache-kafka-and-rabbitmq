const amqp  = require("amqplib");
const message = {
    description: "this is first message."
}
const queue_name="firstQueue";
connect_rabbitmq(); 
async function connect_rabbitmq(){
    try {
        console.log("Connecting..")
        const connection = await amqp.connect("amqp://localhost:5672");
        console.log("Connected..")
        const channel = await connection.createChannel();
        console.log("Channel is ok..")
        const assertion = await channel.assertQueue(queue_name);

        channel.sendToQueue(queue_name,Buffer.from(JSON.stringify(message)));
        console.log("Message is sent");
    } catch (error) {
        console.log("Error : ",error)
    }
}