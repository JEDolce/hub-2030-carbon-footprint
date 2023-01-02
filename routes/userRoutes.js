const express = require("express");
const router = express.Router();
const { saveUser } = require('../middlewares/userAuth');
const {
    register,
    login,
} = require('../controllers/userController');

router.post('/register', saveUser, register);
router.post('/login', login);

module.exports = router;