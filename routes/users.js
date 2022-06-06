var express = require('express');
var Usercontroller = require('../controller/user.controller');

var router = express.Router();

router.post('/adduser', Usercontroller.createUser);

router.get('/getuser', Usercontroller.getUser);

router.get('/getall', Usercontroller.getAllUsers);

router.put('/update', Usercontroller.updateUser);

router.delete('/delete', Usercontroller.deleteUser);

module.exports = router;
