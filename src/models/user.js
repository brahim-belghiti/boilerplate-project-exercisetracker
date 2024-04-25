const mongoose = require('mongoose');

const userSechma = new mongoose.sechma({
    usename: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('User', userSechma);