const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
});
const model = mongoose.model('Employee', EmployeeSchema);

module.exports = model;