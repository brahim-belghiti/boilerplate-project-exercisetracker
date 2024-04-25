const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = user => new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: user, // This refers to the 'User' model
        required: true
    },
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});



const Exercise = mongoose.model('Exercise', exerciseSchema('User')); // Pass the 'User' model as a parameter
module.exports = Exercise;