import express from 'express';

// Connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kasterune:awUytJIxf9r0yrCB@quackathondataset.8crlzqr.mongodb.net/?retryWrites=true&w=majority&appName=QuackathonDataset";
const app = express();
const PORT = 3333;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Defining routes



// Listening to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
