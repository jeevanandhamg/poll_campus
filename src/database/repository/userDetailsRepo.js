const mongoose = require('mongoose');

const UserDetailsModel = require('../models/userDetails');

class UserDetailsRepository {
    
     async createUser(usr) {
        try {
        const user = new UserDetailsModel(usr);
        const userSaveResult  = await user.save();
        console.log("came",userSaveResult);
        return userSaveResult;
        } catch(err) {
            console.log(err);
            return err;
        }
     }
}

module.exports = UserDetailsRepository;