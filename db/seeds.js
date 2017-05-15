const mongoose     = require('mongoose');
mongoose.Promise   = require('bluebird');
const env          = require('../config/env');

mongoose.connect(env.db);

const Level = require('../models/level');

Level.collection.drop();

Level
  .create([
    {
      score: 0,
      time: 60,
      content: 'Text 1',
      index: 0
    },
    {
      score: 0,
      time: 40,
      content: 'Text 2',
      index: 1
    },
    {
      score: 0,
      time: 30,
      content: 'Text 3',
      index: 2
    },
    {
      score: 0,
      time: 20,
      content: 'Text 4',
      index: 3
    },
    {
      score: 0,
      time: 10,
      content: 'Text 5',
      index: 4
    }
  ])
  .then(levels => {
    console.log(`${levels.length} levels were created`);
    process.exit();
  })
  .catch(err => {
    console.log(err);
    process.exit();
  });
