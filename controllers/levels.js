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

function levelsShow(req, res, next) {
  console.log(req.params.id);
  Level
  .findById(req.params.id)
  .exec()
  .then(level => {
    if (!level) {
      const error = new Error('No level was found');
      error.status = 404;
      return next(error);
    }
    console.log('HEY LEVEL IS ');
    console.log(level);
    return res.status(200).json(level);
  })
  .catch(next);
}


module.exports = {
  index: levelsIndex,
  show: levelsShow
};
