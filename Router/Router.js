const express = require('express');
const { createUser } = require('../controllers/CreateUser');
const { AllUsers } = require('../controllers/AllUser');
const { DeleteUser } = require('../controllers/DeleteUser');
const { UpdateUser } = require('../controllers/UpdateUser');
const { GetUser } = require('../controllers/GetUser');

const router = express.Router();

router.post('/CreateUser',createUser);

router.get('/AllUsers',AllUsers);

router.get('/GetUser/:id',GetUser);

router.delete('/DeleteUser/:id',DeleteUser);

router.put('/UpdateUser/:id',UpdateUser);

module.exports = router;
