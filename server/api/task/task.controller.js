var express = require('express');
var router = express.Router();
const EmployeeController = require('./task.controller')

router.get('/', taskController.gettask);

module.exports = router;