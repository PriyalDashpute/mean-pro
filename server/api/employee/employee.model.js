const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    email:String,
    mNumber:String,
    gender:String,
    city:String,
});
const model = mongoose.model('Employee', EmployeeSchema);

module.exports = model;