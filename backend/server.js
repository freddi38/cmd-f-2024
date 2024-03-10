require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// database connections

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const runnersRouter = require('./routes/runners')
app.use('/runners', runnersRouter)

app.use(express.json())
app.use(cors())

// Serve static files from the React app
//app.use(express.static(path.join(__dirname, 'frontend/build')));

// Define API routes and other backend logic

// Serve the React app for any other requests
app.get('/user', (req, res) => {

  
  res.json({

    "name": "Sabrina",
    "activities": ["Running", "Walking"],
    "timeOfDay": 1500,
    "avgPace": 345,
    "avgDistance": 2.60,
    "recentActivities": []

});
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});