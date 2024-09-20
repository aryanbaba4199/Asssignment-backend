const express = require('express');
const router = express.Router();
const {createUser, getUsers, getUser} = require('../Controller/userController');


// --------User Routes ------------------
router.post('/createUser', createUser)
router.get('/getUsers', getUsers)
router.get('/getUser/:email', getUser)

module.exports = router;