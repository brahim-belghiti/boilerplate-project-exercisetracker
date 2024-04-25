const { createUserService, getUsersService } = require('../services/userService');

const createUser = async (req, res) => {
    const userName = req.body.username;
    if (!userName) {
        return res.status(400).json({ error: "Username is required" });
    }
    try {
        const result = await createUserService(userName);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const result = await getUsersService();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = { createUser, getUsers };