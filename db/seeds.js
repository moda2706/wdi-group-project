const mongoose     = require('mongoose');
mongoose.Promise   = require('bluebird');
const env          = require('../config/env');

mongoose.connect(env.db);

const Level = require('../models/level');
const Users = require('../models/user');

Level.collection.drop();
Users.collection.drop();

Level
.create([
  {
    content: `I am Harambe.`,
    index: 1,
    seconds: 60
  },
  {
    content: `I am Harambe`,
    index: 2,
    seconds: 50
  },
  {
    content: `I am Harambe`,
    index: 3,
    seconds: 40
  },
  {
    content: `I am Harambe`,
    index: 4,
    seconds: 30
  },
  {
    content: `I am Harambe`,
    index: 5,
    seconds: 20
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
