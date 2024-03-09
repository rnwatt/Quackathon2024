// Connection
const express = require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kasterune:awUytJIxf9r0yrCB@quackathondataset.8crlzqr.mongodb.net/?retryWrites=true&w=majority&appName=QuackathonDataset";
const app = express();
const PORT = 3000;

app.use(express.urlencoded());

// CORS 
app.use(cors({
  origin: '*'
}));

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let dbConnection;
module.exports = {
  connectToServer: function(callback) {
    client.connect (function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("quackathonDataset");
      console.log("Successful connection to MongoDB");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};

// Defining routes
const routes = express.Router();
routes.route('/api/atm').get(async function (req, res) {
  const dbConnect = dbo.getDb();

  dbConnect.collection("quackathonCollection")
  .find({}).limit(50)
  .toArray(function (err, result) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(result);
    }
  });
});

// Listening to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
