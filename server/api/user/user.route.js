var express = require('express');
var router = express.Router();
const userController = require('./user.controller')

router.get('/', userController.getUser);
router.post('/', userController.createuser);
router.get ('/:id', userController.getUserById);
router.delete ('/:id', userController.deleteUserById);
//router.update('./id', userController.updateUserById)
module.exports = router;
