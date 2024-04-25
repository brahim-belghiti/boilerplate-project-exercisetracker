const User = require('../models/user');
const Exercise = require('../models/exercise');

const createAnExercise = async (userId, exerciseData) => {
    try {
        const userById = await User.findById(userId);
        if (!userById) {
            throw new Error("Couldn't find a user with the provided ID.");
        }

        const exerciseInfo = {
            username: userById.username,
            userId: userId,
            description: exerciseData.description,
            duration: exerciseData.duration,
            date: exerciseData.date || Date.now()
        };

        const newExercise = new Exercise(exerciseInfo);
        const result = await newExercise.save();
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = { createAnExercise };
