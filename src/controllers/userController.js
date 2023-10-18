const userService = require('../services/userService');
const userDetailsRepository  = require('../database/repository/userDetailsRepo');

module.exports = {
    createUser : async (req, res) => {
        console.log("inside controller");
        // const createdUser = userService.createUser(user);
        const repository = new userDetailsRepository();
        // await this.repository.createUser({"userName":"jeeva","password":"jeeva","firstName":"jeeva",
        // "lastName":"G","email": "email","mobileNumber":"9999999999"})
        const usr = {"userName":"jeeva","password":"jeeva","firstName":"jeeva",
        "lastName":"G","email": "email","mobileNumber":"9999999999"}
        await repository.createUser(usr)
        .then((user) => {
            res.json(user);
          })
          .catch((error) => {
            res.status(500).json({ error: 'User creation failed' });
          });
    }
};
