const router = require('express').Router();
const _supportFunc = require('./supporting_functions');

/* List all users */
router.get('/logged-in-user', (req, res, next) => {
  return res.json({ userList: 'API is working!' });
});

module.exports = router;
