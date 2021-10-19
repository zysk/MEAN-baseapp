const router = require('express').Router();
const User = require('../models/user');
const _authenticator = require('authenticator');
const _supportFunc = require('./_supporting_functions');

/* Add new user */
router.post('/add-user', (req, res) => {
  return _supportFunc.onSuccess(res, _authenticator.verifyToken(req['body']['key'], req['body']['otp']));
  // new User({
  //   firstName: req.body.fName,
  //   lastName: req.body.lName,
  //   email: req.body.email
  // }).save().then(data => _supportFunc.onSuccess(res, data)).catch(err => _supportFunc.onError(res, err));
});

/* List all users */
router.get('/list-all-users', (req, res) => {
  const formattedKey = _authenticator.generateKey();
  console.log('formattedKey', formattedKey);
  const _otpPath = _authenticator.generateTotpUri(formattedKey, 'arijitsaha1700@outlook.com', 'AG-Auto', 'SHA1', 6, 30);
  return _supportFunc.onSuccess(res, _otpPath);
  // User.find().exec().then(data => _supportFunc.onSuccess(res, data)).catch(err => _supportFunc.onError(res, err));
});

module.exports = router;
