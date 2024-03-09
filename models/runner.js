const mongoose = require('mongoose')

const runnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    activities: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'Activity',
        required: true
    },
    timeOfDay: {
        
    },
    avgPace: {

    },
    avgDistance: {

    },
    recentActivities: {

    }
})