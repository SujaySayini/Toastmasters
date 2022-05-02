const mongoose = require('mongoose');
const{MongoMemoryServer} = require('mongodb-memory-server');
const { MongoDBNamespace } = require('mongodb');
const { disconnect } = require('process');
const mongoServer = new MongoMemoryServer();

//connect to db
module.exports.connect = async() =>{
    const uri = await MongoDBNamespace.getUri();
    const mongooseOpt = {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        poolSize: 10
    };
    await mongoose.connect(uri, mongooseOpt);
}

//disconnect and close connection

module.exports.closeDatabase = async() =>{
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
}

module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections){
        const collection  = collections[key];
        await collection.deleteMany();
    }
}
