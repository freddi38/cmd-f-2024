const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Runner',
        required: true
    },
    startTime: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    pace: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    participants: {
        type: Array,
        required: true
    }
})