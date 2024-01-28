var express = require('express');
var router = express.Router();
const EmployeeController = require("./employee.controller.js");

router.get('/', EmployeeController.getEmployee);
router.post('/', EmployeeController.createEmployee);
router.put('/:id', EmployeeController.updateEmployee);
router.get ('/:id', EmployeeController.getEmployeeById);
router.delete ('/:id', EmployeeController.deleteEmployeeById);
module.exports = router;
