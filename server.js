require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE_URL;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// mongoose.connect(process.env.DATABASE_URL)
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))

// app.use(express.json())

const runnersRouter = require('./routes/runners')
app.use('/runners', runnersRouter)


app.listen(3000, () => console.log('Server Started'))