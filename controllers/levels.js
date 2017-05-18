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

  const play = req.body;
  play.user = req.user._id;

  Level
  .findById(req.params.id)
  .exec()
  .then(level => {
    if (!level) return res.status(404).json({ message: 'Level not found.' });

    const previous = level.plays.find(p => p.user == req.user.id);

    if (!previous) {

      level.plays.push(play);

      // Adding new score to user
      const newScore = req.user.userScore + play.score;
      req.user.userScore = newScore;
      console.log(`User score now is ${req.user.userScore}`);

      // Adding a new level to user
      const newLevel = req.user.currentLevel + 1;
      req.user.currentLevel = newLevel;
      console.log(`User score now is ${req.user.currentLevel}`);

      // Saving the user
      req.user.save();

    } else {
      previous.set(play);
    }

    // Update user's score


    return level.save();
  })
  .then(level => res.status(200).json(level))
  .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

module.exports = {
  index: levelsIndex,
  show: levelsShow,
  update: levelsUpdate
};
