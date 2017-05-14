const router = require('express').Router();
const levels  = require('../controllers/levels');

router.route('/levels')
  .get(levels.index);

module.exports = router;
