// Function that checks for existing usernames and emails 
// in the database to avoid duplicates before saving a user
const db = require('../models');

const User = db.users;

// Function to check if username or email already exist in the database
// this is to avoid having two users with the same username and email
const saveUser = async (req, res, next) => {

    // Search the database to see if user exist
    try {
        const username = await User.findOne({
            where: {
                userName: req.body.userName,
            },
        });

        // If username exist in the database respond with a status of 409
        if (username) {
            return res.json(409).send('username already taken');
        }

        // Check if email already exist
        const emailCheck = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        //if email exist in the database respond with a status of 409
        if (emailCheck) {
            return res.json(409).send('Email already used');
        }

        next();
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    saveUser
}