const mongoose = require('mongoose');

const Schema = mongoose.Schema;
userDetailsDb = mongoose.connection.useDb('poll_campus');
const UserDetailsSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    mobileNumber: { type: Number, required: true },
});

module.exports = userDetailsDb.model('user_details', UserDetailsSchema);