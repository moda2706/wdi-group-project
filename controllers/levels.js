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

    return res.status(200).json(level);
  })
  .catch(next);
}

function levelsUpdate(req, res) {

  Level.findByIdAndUpdate(req.params.id, { new: true },  (err, level) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!level) return res.status(404).json({ message: 'Level not found.' });
    return res.status(200).json(level);
  });
  
}

module.exports = {
  index: levelsIndex,
  show: levelsShow,
  update: levelsUpdate
};
