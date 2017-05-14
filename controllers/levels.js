const Level = require('../models/level');

function levelsIndex(req, res, next) {
  Level
    .find()
    .exec()
    .then(levels => {
      return res.status(200).json(levels);
    })
    .catch(next);
}

module.exports = {
  index: levelsIndex
};
