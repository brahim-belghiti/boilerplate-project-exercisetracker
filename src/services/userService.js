const User = require('../models/user');

const createUserService = async (userName) => {
    const newUser = new User({ username: userName });
    try {
        const savedUser = await newUser.save();
        return savedUser;
    } catch (err) {
        throw new Error('Internal Server Error'); // Throw the error to be caught by the caller
    }
}

const getUsersService = async () => {
    try {
        const allUsers = await User.find();
        return allUsers;
    } catch (err) {
        throw new Error('Internal Server Error'); // Throw the error to be caught by the caller
    }
}

module.exports = { createUserService, getUsersService };