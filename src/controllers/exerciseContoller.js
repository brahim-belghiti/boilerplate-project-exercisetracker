const user = require('../models/user');
const exerciseService = require('../services/exerciseService');

const createExercise = async (req, res) => {
    const userId = req.body[':_id'] || req.params._id
    console.log("🚀 ~ createExercise ~ userId:", userId)
    try {
        result = await exerciseService.createExercise(userId, req.body);
        const { _id, user_id, username, description, duration, date } = result;

        res.status(200).json({
            username: username,
            description: description,
            duration: duration,
            date: date.toDateString(),
            _id: user_id
        }
        );
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getUserExercises = async (req, res) => {
    const userId = req.params._id;
    const { from, to, limit } = req.query;
    try {
        const result = await exerciseService.getUserExercises(userId, from, to, limit);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { createExercise, getUserExercises };
