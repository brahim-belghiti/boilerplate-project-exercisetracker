const exerciseService = require('../services/exerciseService');

const createAnExercise = async (req, res) => {
    const userId = req.body[':_id'];
    try {
        result = await exerciseService.createAnExercise(userId, req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createAnExercise };
