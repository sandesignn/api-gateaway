const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');

const userHandler = require('./handler/users');

router.post('/register', userHandler.register);
router.post('/login', userHandler.login);
router.post('/logout', verifyToken, userHandler.logout);
router.get('/', verifyToken, userHandler.getUser);
router.put('/', verifyToken, userHandler.userUpdate);


module.exports = router;
