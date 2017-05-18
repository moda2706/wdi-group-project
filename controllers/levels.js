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
    let scoreSum = 0;

    if (!previous) {

      // Pushing a new user to the level
      level.plays.push(play);

      // Adding new score to user
      req.user.levelsScore.push(play.score);

      // Adding a new level to user
      const newLevel = req.user.currentLevel + 1;
      req.user.currentLevel = newLevel;
      console.log(`User level now is ${req.user.currentLevel}`);

    } else {
      // Updating the current level stats for the user
      console.log('Previous score: ');
      console.log(req.user.levelsScore[play.index-1]);

      if(play.score > req.user.levelsScore[play.index-1]) {
        // New score is better, update!
        console.log('New score is better!');
        console.log(play.score);
        req.user.levelsScore.splice(play.index-1, 1, play.score);
        previous.set(play);
      } else {
        // New score is worse, don't update
        console.log('Worse score, no update');
      }
    }

    // Calculating user's total score
    for(let i = 0; i < req.user.levelsScore.length; i++) {
      scoreSum += req.user.levelsScore[i];
    }
    req.user.userScore = scoreSum;
    console.log(`User score now is ${req.user.userScore}`);

    // Saving the user
    req.user.save();
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
