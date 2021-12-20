const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name:String,
    last_name: String,
    time: Date,
    school: String
})

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;
