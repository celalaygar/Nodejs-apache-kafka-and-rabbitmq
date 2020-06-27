### Node js and Apache Kafka
Docker Commands

``` 
- docker run --name zookeeper -p 2181:2181 zookeeper

- docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=[ip_adress]:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://[ip_adress]:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
``` 
Node 
``` 
- npm init
- npm install --save kafkajs
``` 
