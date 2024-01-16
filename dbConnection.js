const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sit725week8:week8@cluster0.nnnkjpq.mongodb.net/";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;