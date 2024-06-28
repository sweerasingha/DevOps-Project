const express = require('express');

const router = express.Router();
const PatientController = require('../controllers/patients');
const verifyToken = require('../middlewears/verifyToken')

router.post('/', PatientController.register)
router.post('/login', PatientController.login)
router.put('/update',verifyToken, PatientController.updateUser)
router.get('/',verifyToken, PatientController.getUserData)
router.delete('/',verifyToken, PatientController.deleteAccount)
module.exports = router;