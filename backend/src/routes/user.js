const express = require('express');

const router = express.Router();
const UserController = require('../controllers/users');
const verifyToken = require('../middlewears/verifyToken')

router.post('/', UserController.register)
router.post('/login', UserController.login)
router.post('/checkPassword',verifyToken, UserController.checkPassword)
router.put('/update',verifyToken, UserController.updateUser)
router.get('/',verifyToken, UserController.getUserData)
router.delete('/delete',verifyToken, UserController.deleteAccount)
router.post('/', UserController.register)


module.exports = router;