const mongoose = require('mongoose');

const userSechma = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('User', userSechma);