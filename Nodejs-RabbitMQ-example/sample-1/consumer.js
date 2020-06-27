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
        
        channel.consume(queue_name, (data) =>{
            console.log("Message : ", data.content.toString())
            channel.ack(data);
        }); 
    } catch (error) {
        console.log("Error : ",error)
    }
}