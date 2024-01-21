const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{type: String, require: true},
    passward:{type: String, require: true},
});
const model = mongoose.model('User', userSchema);

module.exports = model;