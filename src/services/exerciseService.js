const User = require('../models/user');
const Exercise = require('../models/exercise');

const createExercise = async (userId, exerciseData) => {
    try {
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found with the provided ID.");
        }

        // Create exercise object
        const newExercise = new Exercise({
            username: user.username,
            description: exerciseData.description,
            duration: exerciseData.duration,
            date: exerciseData.date ? new Date(exerciseData.date).toDateString() : new Date().toDateString(),
            user_id: userId,
        });

        // Save exercise
        const result = await newExercise.save();
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};

const getUserExercises = async (userId, from, to, limit) => {
    try {
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found with the provided ID.");
        }

        // Construct query for exercises
        const query = { user_id: userId };
        if (from && to) {
            query.date = { $gte: new Date(from), $lte: new Date(to) };
        }

        // Retrieve user's exercises based on query
        let exercisesQuery = Exercise.find(query);
        if (limit) {
            exercisesQuery = exercisesQuery.limit(parseInt(limit));
        }
        const exercises = await exercisesQuery;

        // Construct response object
        const userWithExercises = {
            username: user.username,
            count: exercises.length,
            _id: user._id,
            log: exercises.map(exercise => ({
                description: exercise.description,
                duration: exercise.duration,
                date: exercise.date.toDateString()
            }))
        };

        return userWithExercises;
    } catch (err) {
        throw new Error(err.message);
    }
};


module.exports = { createExercise, getUserExercises };

