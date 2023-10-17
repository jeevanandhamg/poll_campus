const userService = require('../services/userService');


module.exports = {
    createUser : async (req, res) => {
        const user = req.body;
        // const createdUser = userService.createUser(user);
        res.status(201).json(createdUser);
    }
};
