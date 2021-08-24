const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const SignUpSchema = require('../model/signupModel');

const create = require('../CRUD/Create');
const read = require('../CRUD/Read');
const update = require('../CRUD/Update');
const Delete = require('../CRUD/Delete');

//#region Create Operation

//#region Read Operation
router.post('/create', async (req, response) => {
    console.log('inside create signup', req.body);
    const { userName, password } = req.body;

    try {
        const getAllSignupUsers = await SignUpSchema.findOne({
            userName: userName,
        });

        console.log(getAllSignupUsers, 'user......');
        if (getAllSignupUsers) {
            bcrypt.compare(password, getAllSignupUsers.password, (err, res) => {
                console.log(res, '....');
                if (res) {
                    response.json({
                        msg: ' Successfully login',
                        token: 'gfghfhghjguytyyftdfgxds',
                    });
                } else {
                    response.json({ msg: 'password donot match' });
                }
            });
        } else {
            response.json({ msg: 'user not found' });
        }
    } catch {
        res.status(400).json({ msg: 'Something Went Wrong' });
    }
});
//#endregion

module.exports = router;
//#endregion
