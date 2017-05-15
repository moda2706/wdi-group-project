const express         = require('express');
const router          = express.Router();
const levels          = require('../controllers/levels');
const authentications = require('../controllers/authentications');
const users           = require('../controllers/users');


router.route('/register')
  .post(authentications.register);
router.route('/login')
  .post(authentications.login);

router.route('/users')
  .get(users.index);
router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/levels')
  .get(levels.index);
router.route('levels/:id')
  .get(levels.show);


module.exports = router;
