const router = require('express').Router();

/* Module wise routes */
router.use('/user', require('./users_module'));

module.exports = router;
