const router = require('express').Router();
const levels  = require('../controllers/levels');

router.route('/levels')
  .get(levels.index);
router.route('levels/:id')
   .get(levels.show);

module.exports = router;
