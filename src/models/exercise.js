const mongoose = require('mongoose');

const exerciseSechma = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Exercise', exerciseSechma);