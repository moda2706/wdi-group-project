const mongoose     = require('mongoose');
mongoose.Promise   = require('bluebird');
const env          = require('../config/env');

mongoose.connect(env.db);

const Level = require('../models/level');

Level.collection.drop();

Level
.create([
  {
    content: `I am Harambe, and this is my zoo enclosure. I work here with my zoo keeper and my friend, cecil the lion. Everything in here has a story and a price. One thing I have learned after 21 years - you never know WHO is gonna come over that fence.`,
    index: 1,
    seconds: 60
  },
  {
    content: `I am Harambe, and this is my zoo enclosure. I work here with my zoo keeper and my friend, cecil the lion. Everything in here has a story and a price. One thing I have learned after 21 years - you never know WHO is gonna come over that fence.`,
    index: 2,
    seconds: 50
  },
  {
    content: `I am Harambe, and this is my zoo enclosure. I work here with my zoo keeper and my friend, cecil the lion. Everything in here has a story and a price. One thing I have learned after 21 years - you never know WHO is gonna come over that fence.`,
    index: 3,
    seconds: 40
  },
  {
    content: `I am Harambe, and this is my zoo enclosure. I work here with my zoo keeper and my friend, cecil the lion. Everything in here has a story and a price. One thing I have learned after 21 years - you never know WHO is gonna come over that fence.`,
    index: 4,
    seconds: 30
  },
  {
    content: `I am Harambe, and this is my zoo enclosure. I work here with my zoo keeper and my friend, cecil the lion. Everything in here has a story and a price. One thing I have learned after 21 years - you never know WHO is gonna come over that fence.`,
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
