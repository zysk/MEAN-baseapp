const router = require('express').Router();
const User = require('../models/user');
const _supportFunc = require('./_supporting_functions');

/* Add new user */
router.post('/add-user', (req, res) => {
  new User({
    firstName: req.body.fName,
    lastName: req.body.lName,
    email: req.body.email
  }).save().then(data => _supportFunc.onSuccess(res, data)).catch(err => _supportFunc.onError(res, err));
});

/* List all users */
router.get('/list-all-users', (req, res) => {
  User.find().exec().then(data => _supportFunc.onSuccess(res, data)).catch(err => _supportFunc.onError(res, err));
});

module.exports = router;
