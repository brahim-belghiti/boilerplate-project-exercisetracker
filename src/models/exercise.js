const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
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

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;
