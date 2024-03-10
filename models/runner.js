const mongoose = require('mongoose')

const runnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    activities: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity',
        required: true
    },
    timeOfDay: {
        type: Number,
        required: true
    },
    avgPace: {
        type: Number,
        required: true
    },
    avgDistance: {
        type: Number,
        required: true
    },
    recentActivities: {
        type: Array,
    }
})

module.exports = mongoose.model('Runner', runnerSchema)